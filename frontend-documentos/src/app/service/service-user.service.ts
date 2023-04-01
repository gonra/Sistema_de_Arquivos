import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Parametros} from '../constant/parametros';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceUserService {

    etapa: Number = 1;
    token = "";
    error_message: string = '';

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
                        this.router.navigate(['/home'])
                    })
                },
                error: (error: HttpErrorResponse) => {
                    if (error.status == 401)
                        this.error_message = "Usuário ou senha incorretos!"
                    else
                        this.error_message = "Ocorreu um erro, contate o administrador do sistema."
                }
            }
        );
    }

    getError(): string {
        return this.error_message;
    }

    doDataUserLogged() {
        return this.httpClient.get(Parametros.apiurl + '/api/user', this.httpOptions);
    }

    get isLoggedIn(): boolean {
        let user = JSON.parse(localStorage.getItem('user')!);
        console.log('user_logged', user)
        return user !== null;
    }

    SignOut() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
