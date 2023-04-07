import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './view/menu/menu.component';
import {LoginComponent} from './view/login/login.component';
import {DocumentComponent} from './view/document/document.component';
import {SearchComponent} from './view/search/search.component';
import {ReportComponent} from './view/report/report.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutComponent} from './view/layout/layout.component';
import {ServiceLoginService} from "./service/service-login.service";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UserComponent} from './view/user/user/user.component';
import {UserIncluirComponent} from './view/user/user-incluir/user-incluir.component';
import {UserListaComponent} from './view/user/user-lista/user-lista.component';
import {UserAlterarComponent} from './view/user/user-alterar/user-alterar.component';
import { EditUserLoggedComponent } from './view/user/edit-user-logged/edit-user-logged.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        DocumentComponent,
        SearchComponent,
        ReportComponent,
        LayoutComponent,
        UserComponent,
        UserIncluirComponent,
        UserListaComponent,
        UserAlterarComponent,
        EditUserLoggedComponent
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
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        NgOptimizedImage
    ],
    exports: [
        MenuComponent
    ],
    providers: [ServiceLoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
