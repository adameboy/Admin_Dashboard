import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth-guard.guard';
import { loginGuard } from './Guards/login-guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [loginGuard],
    loadChildren: () => import('./Modules/Auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./Modules/Error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./Modules/Dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', redirectTo: 'error/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
