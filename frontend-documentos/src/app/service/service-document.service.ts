import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Document } from '../model/document';
import { Location } from '../model/localizacao';
import { User } from '../model/user';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceDocumentService {

  myhost = "192.168.199.130";
  etapa: Number = 1;
  token = "";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token })
  };

  constructor(private httpClient: HttpClient) { }

  setToken(token:string) {
    this.token = token;
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token })
    };
  }

  listarDocumento(filtro: any, tipoDoc: string){
 
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/contrato/listar',filtro, this.httpOptions);
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/licitacao/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/financeira/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/pasta/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/outro/listar',filtro, this.httpOptions);
  
    }
  }

  guardarDocumento(doc:Document, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/contrato/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/licitacao/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/financeira/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/pasta/cadastrar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.post(
        'http://'+this.myhost+':8080/api/outro/cadastrar',doc, this.httpOptions);
  
    }
  }

  lerDocumento(id:Number, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.get(
        'http://'+this.myhost+':8080/api/contrato/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.get(
        'http://'+this.myhost+':8080/api/licitacao/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.get(
        'http://'+this.myhost+':8080/api/financeira/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.get(
        'http://'+this.myhost+':8080/api/pasta/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.get(
        'http://'+this.myhost+':8080/api/outro/'+id, this.httpOptions);
  
    }
  }

  deletarDocumento(id:Number, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.delete(
        'http://'+this.myhost+':8080/api/contrato/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.delete(
        'http://'+this.myhost+':8080/api/licitacao/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.delete(
        'http://'+this.myhost+':8080/api/financeira/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.delete(
        'http://'+this.myhost+':8080/api/pasta/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.delete(
        'http://'+this.myhost+':8080/api/outro/'+id, this.httpOptions);
  
    }
  }

}
