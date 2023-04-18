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
      this.setToken(localStorage.getItem("token")!);
    }

    loadUser(id: number) {
      return this.httpClient.get<User>(this.urlModule + id, this.httpOptions);
    }

    deleteUser(id: number) {
      return this.httpClient.delete(this.urlModule + 'delete/' + id, this.httpOptions);
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
        return this.httpClient.post<User>(this.urlModule + 'cadastrar', user, this.httpOptions);
    }

    updateUser(id: number, user: User) : Observable<User>{
      user.idEmpregado = id;
      return this.httpClient.put<User>(this.urlModule + 'atualizar', user, this.httpOptions);
    }

    updateLoggedUser(id: number, user: any) : Observable<User>{
      user.idEmpregado = id;
      return this.httpClient.put<User>(this.urlModule + 'update-logged-user', user, this.httpOptions);
    }

    toggleAdmin(idUser: number, toggle: boolean){
        var data = {
            idUser: idUser,
            admin: toggle
        };
        return this.httpClient.post(
            Parametros.apiurl+'/api/toggle-adm', data, this.httpOptions
        )
    }
}
