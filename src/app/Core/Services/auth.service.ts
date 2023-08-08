import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuth } from '../Interfaces/Responses/IAuth';
import { LoginCommand } from '../Interfaces/Commands/LoginCommand';
import { BaseApiResponse } from 'src/app/Core/Interfaces/Responses/BaseApiResponse';
import { Store } from '@ngrx/store';
import { selectAppAuth } from '../state/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$: Observable<IAuth | null> = this.store.select(selectAppAuth);
  constructor(
    private httpClient: HttpClient,
    private store: Store,
    private router: Router) {
  }


  login(command: LoginCommand) {
    const fakeResponse: BaseApiResponse<IAuth> = {
      code: "0000",
      data: {
        expDate: '',
        isAuthenticated: true,
        jwt: 'JWTTOKEN',
        refreshToken: '',
        user: {
          comision: 0,
          email: '',
          idCentroCostos: 0,
          idCentroCostosPadre: 0,
          idEmpresa: 0,
          nombre: '',
          permisos: '',
          role: '',
          saldo: 0,
          userId: ''
        }
      },
      message: ''
    }
    return of(fakeResponse);
    return this.httpClient.post<BaseApiResponse<IAuth>>(`${environment.apiUrl}/security/Account/LoginWeb`, command);
  }
  getAuth() {
    const authStr = localStorage.getItem("auth");
    if (authStr) {
      const auth: IAuth = JSON.parse(authStr)
      return auth;
    };
    return null;
  }
  saveAuth(auth: IAuth | null) {
    if (auth)
      localStorage.setItem("auth", JSON.stringify(auth));
    this.router.navigate(['/'], {
      queryParams: {},
    });
  }
  logout() {
    localStorage.removeItem("auth");
    this.router.navigate(['/auth'], {
      queryParams: {},
    });
  }
}
