import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { LayoutComponent } from './view/layout/layout.component';
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LayoutComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
