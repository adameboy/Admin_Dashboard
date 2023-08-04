import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { logoutAction, setErrorApp } from '../state/app/app.actions';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService = this.injector.get(AuthService);
        const token = this.authService.getAuth();
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token?.jwt}`,
                // 'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private store: Store,
        private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                catchError((response: any) => {
                    if (response instanceof HttpErrorResponse && response.status === 401) {
                        this.store.dispatch(logoutAction())
                    }
                    return throwError(() => response);
                })
            )
    }
}
