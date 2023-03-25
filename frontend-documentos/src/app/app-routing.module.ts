import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DocumentComponent } from './view/document/document.component';
import { Report } from './model/report';
import { SearchComponent } from './view/search/search.component';
import { AdminusersComponent } from './view/adminusers/adminusers.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
