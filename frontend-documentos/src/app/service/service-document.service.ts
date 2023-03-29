import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Parametros } from '../constant/parametros';
import { Document } from '../model/document';
import { Location } from '../model/localizacao';
import { User } from '../model/user';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceDocumentService {

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
        Parametros.apiurl+'/api/contrato/listar',filtro, this.httpOptions);
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.post(
        Parametros.apiurl+'/api/licitacao/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.post(
        Parametros.apiurl+'/api/financeira/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.post(
        Parametros.apiurl+'/api/pasta/listar',filtro, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.post(
        Parametros.apiurl+'/api/outro/listar',filtro, this.httpOptions);
  
    }
  }

  guardarDocumento(doc:Document, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.post(
        Parametros.apiurl+'/api/contrato/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.post(
        Parametros.apiurl+'/api/licitacao/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.post(
        Parametros.apiurl+'/api/financeira/listar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.post(
        Parametros.apiurl+'/api/pasta/cadastrar',doc, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.post(
        Parametros.apiurl+'/api/outro/cadastrar',doc, this.httpOptions);
  
    }
  }

  lerDocumento(id:Number, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.get(
        Parametros.apiurl+'/api/contrato/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.get(
        Parametros.apiurl+'/api/licitacao/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.get(
        Parametros.apiurl+'/api/financeira/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.get(
        Parametros.apiurl+'/api/pasta/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.get(
        Parametros.apiurl+'/api/outro/'+id, this.httpOptions);
  
    }
  }

  deletarDocumento(id:Number, tipoDoc: string){

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    if (tipoDoc = 'CONTRATO') {
      this.httpClient.delete(
        Parametros.apiurl+'/api/contrato/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'LICITACAO') {
      this.httpClient.delete(
        Parametros.apiurl+'/api/licitacao/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'FINANCEIRA') {
      this.httpClient.delete(
        Parametros.apiurl+'/api/financeira/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'PASTA') {
      this.httpClient.delete(
        Parametros.apiurl+'/api/pasta/'+id, this.httpOptions);
  
    }

    if (tipoDoc = 'OUTRO') {
      this.httpClient.delete(
        Parametros.apiurl+'/api/outro/'+id, this.httpOptions);
  
    }
  }

}
