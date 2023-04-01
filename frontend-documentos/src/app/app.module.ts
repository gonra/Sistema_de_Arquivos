import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './view/menu/menu.component';
import { LoginComponent } from './view/login/login.component';
import { AdminusersComponent } from './view/adminusers/adminusers.component';
import { DocumentComponent } from './view/document/document.component';
import { SearchComponent } from './view/search/search.component';
import { ReportComponent } from './view/report/report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './view/layout/layout.component';
import {ServiceUserService} from "./service/service-user.service";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AdminusersComponent,
    DocumentComponent,
    SearchComponent,
    ReportComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule
  ],
  providers: [ServiceUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
