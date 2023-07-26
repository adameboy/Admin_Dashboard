import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChildFn } from "@angular/router";
import { map, catchError, of } from "rxjs";
import { AuthService } from "../Core/Services/auth.service";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // If not authenticated, redirect to the login page with the attempted URL as a query parameter
  return authService.isAuth$.pipe(
    map(value => {
      if (!value)
        authService.logout();
      return value;
    })
  )
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => authGuard(route, state);