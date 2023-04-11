import { EventEmitter, Injectable } from '@angular/core';
import { Parametros } from '../constant/parametros';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private readonly urlModule = Parametros.apiurl + "/api/empregado/";

    etapa: Number = 1;
    token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4MDcyMjUwOSwiZXhwIjoxNjgwNzQwNTA5fQ.Zamk79Rup0bbfroxTMEjTFFXegL8I18NptMLOzoPDGdfr_PQaQk8lbkW8mhjX1Egs5Tr6n5eYkGaO0MnBPFGiw";
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
      this.setToken(localStorage.getItem("token")!);
    }

    loadUser(id: number) {
      return this.httpClient.get<User>(this.urlModule + id, this.httpOptions);
    }

    deleteUser(id: number) {
      return this.httpClient.delete(this.urlModule + 'deleteUser/' + id, this.httpOptions);
    }

    listUsers(pAtivo: string, pEmail: string, pMatricula: string, pNome: string, pUnidadeDepartamento: string) { 
      var data = {
          ativo: pAtivo,
          email: pEmail,
          matricula: pMatricula,
          nome: pNome,
          unidadeDepartamento: pUnidadeDepartamento
      };
      return this.httpClient.post<User[]>(this.urlModule + 'listar', data, this.httpOptions);
    }

    saveUser(user: User) : Observable<User>{
        console.log(user);
        return this.httpClient.post<User>(this.urlModule + 'cadastrar', user, this.httpOptions);
    }

    updateUser(id: number, user: User) : Observable<User>{
      user.idEmpregado = id;
      console.log(user);
      return this.httpClient.put<User>(this.urlModule + 'atualizarEmpregado/', user, this.httpOptions);
    }

  
}
