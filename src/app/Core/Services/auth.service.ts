import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private booleanSubject: BehaviorSubject<boolean>;
  isAuth$: Observable<boolean>;

  constructor(private router: Router) {
    this.booleanSubject = new BehaviorSubject(true);
    this.isAuth$ = this.booleanSubject.asObservable();
  }



  logout() {
    // localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth'], {
      queryParams: {},
    });
  }
  emitBooleanValue(value: boolean) {
    this.booleanSubject.next(value);
  }
}
