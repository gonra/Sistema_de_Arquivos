import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Parametros} from '../constant/parametros';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class ServiceLoginService {

    etapa: Number = 1;
    currentEmpregadoId = 0;
    token = "";
    // @Output() error_message = new EventEmitter();

    error_message: EventEmitter<string> = new EventEmitter();

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        })
    };

    setToken(token: string) {
        this.token = token;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
    }

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    doLogin(user:string,pass:string){
        var data = {
            matricula:user,
            senha:pass
        };
        this.httpClient.post(
            Parametros.apiurl+'/api/login', data
        ).subscribe(
            {
                next: (res: any) => {
                    localStorage.setItem("token", res.token);
                    this.setToken(res.token);
                    this.doDataUserLogged().subscribe((user: any) => {
                        localStorage.setItem('user', JSON.stringify(user));
                        this.currentEmpregadoId = user?.idEmpregado;
                        this.router.navigate(['/home'])
                    })
                },
                error: (error: HttpErrorResponse) => {
                    if (error.status == 401)
                        this.error_message.emit("Usuário ou senha incorretos!")
                    else
                        this.error_message.emit("Ocorreu um erro, contate o administrador do sistema.");
                }
            }
        );
    }

    isAdmin(){
        let user = JSON.parse(localStorage.getItem('user')!);
        let isAdmin =   user?.roles.filter((u: string | string[]) => u.includes('ADMIN'));
        return isAdmin.length > 0;
    }

    doDataUserLogged() {
        return this.httpClient.get(Parametros.apiurl + '/api/user', this.httpOptions);
    }

    get isLoggedIn(): boolean {
        let user = JSON.parse(localStorage.getItem('user')!);
        return user !== null;
    }

    SignOut() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    getError() {
        return this.error_message;
    }

}
