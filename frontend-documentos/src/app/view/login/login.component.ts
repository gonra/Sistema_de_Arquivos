import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {ServiceLoginService} from '../../service/service-login.service';
import {User} from "../../model/user";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    mensagem: any = "";
    loginForm: any;

    constructor(private userService: ServiceLoginService, private router: Router) {
        this.loginForm = new FormGroup({
            matricula: new FormControl(''),
            senha: new FormControl('')
        });
    }

    ngOnInit(): void {
        if (this.userService.isLoggedIn) {
            if (confirm("Você  será deslogado, deseja continuar ?")) {
                this.userService.SignOut();
            } else
                this.router.navigate(['home']);
        }
    }

    doLogin(): void {
        this.userService.doLogin(
            this.loginForm.get('matricula').value,
            this.loginForm.get('senha').value
        );

        if (!this.userService.isLoggedIn) {
            this.userService.getError()
                .subscribe(item => this.mensagem = item);
        }
    }

    protected readonly alert = alert;
}
