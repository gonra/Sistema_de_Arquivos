import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parametros } from '../constant/parametros';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  myhost = Parametros.myhost;
  etapa: Number = 1;
  token = "";

  constructor(private httpClient: HttpClient) { }

  doLogin(user:string,pass:string){
    var data = {
      matricula:user,
      senha:pass
    };
    this.httpClient.post(
      'http://'+this.myhost+':8080/api/login', data
    ).subscribe( 
      (resp:any) => this.token = resp.token
    );
  }

  getToken(token:string) {
    this.token = token;
  }
}
