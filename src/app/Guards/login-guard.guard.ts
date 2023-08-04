import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChildFn } from "@angular/router";
import { map } from "rxjs";
import { AuthService } from "../Core/Services/auth.service";

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);

  // If not authenticated, redirect to the login page with the attempted URL as a query parameter
  return authService.isAuth$.pipe(
    map(value => {
      if (value)
        authService.saveAuth(null);
      return !value;
    })
  )
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => loginGuard(route, state);
