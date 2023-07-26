import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { UsersComponent } from './Pages/users/users.component';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/Components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';


@NgModule({
  declarations: [HomeComponent, UsersComponent, DashboardComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
