import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Parametros } from '../constant/parametros';
import { Document } from '../model/document';
import { Location } from '../model/localizacao';
import { User } from '../model/user';
import { FiltroPesquisaDocumentoDTO } from '../model/filtro';

@Injectable({
  providedIn: 'root'
})
export class ServiceDocumentService {

  etapa: Number = 1;
  token = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };

  constructor(private httpClient: HttpClient, private router: Router) {
    this.setToken(localStorage.getItem("token")!);
  }

  setToken(token: string) {
    this.token = token;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
  }

  listarDocumento(filtro: FiltroPesquisaDocumentoDTO, tipoDoc: string):any {

    if (tipoDoc == 'CONTRATO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/contrato/listar', filtro, this.httpOptions);
    }

    if (tipoDoc == 'LICITACAO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/licitacao/listar', filtro, this.httpOptions);

    }

    if (tipoDoc == 'FINANCEIRA') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/financeira/listar', filtro, this.httpOptions);

    }

    if (tipoDoc == 'PASTA') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/pasta/listar', filtro, this.httpOptions);

    }

    if (tipoDoc == 'OUTRO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/outro/listar', filtro, this.httpOptions);

    }
  }

  guardarDocumento(doc: Document, tipoDoc: string):any {

    if (tipoDoc == 'CONTRATO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/contrato/cadastrar', doc, this.httpOptions);

    }

    if (tipoDoc == 'LICITACAO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/licitacao/cadastrar', doc, this.httpOptions);

    }

    if (tipoDoc == 'FINANCEIRA') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/financeira/cadastrar', doc, this.httpOptions);

    }

    if (tipoDoc == 'PASTA') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/pasta/cadastrar', doc, this.httpOptions);

    }

    if (tipoDoc == 'OUTRO') {
      return this.httpClient.post<Document[]>(
        Parametros.apiurl + '/api/outro/cadastrar', doc, this.httpOptions);

    }
    return {};
  }

  lerDocumento(id: Number, tipoDoc: string):any {

    if (tipoDoc == 'CONTRATO') {
      return this.httpClient.get<Document[]>(
        Parametros.apiurl + '/api/contrato/' + id, this.httpOptions);

    }

    if (tipoDoc == 'LICITACAO') {
      return this.httpClient.get<Document[]>(
        Parametros.apiurl + '/api/licitacao/' + id, this.httpOptions);

    }

    if (tipoDoc == 'FINANCEIRA') {
      return this.httpClient.get<Document[]>(
        Parametros.apiurl + '/api/financeira/' + id, this.httpOptions);

    }

    if (tipoDoc == 'PASTA') {
      return this.httpClient.get<Document[]>(
        Parametros.apiurl + '/api/pasta/' + id, this.httpOptions);

    }

    if (tipoDoc == 'OUTRO') {
      return this.httpClient.get<Document[]>(
        Parametros.apiurl + '/api/outro/' + id, this.httpOptions);

    }
    return {};
  }

  deletarDocumento(id: Number, tipoDoc: string):any {

    if (tipoDoc == 'CONTRATO') {
      return this.httpClient.delete(
        Parametros.apiurl + '/api/contrato/' + id, this.httpOptions);

    }

    if (tipoDoc == 'LICITACAO') {
      return this.httpClient.delete(
        Parametros.apiurl + '/api/licitacao/' + id, this.httpOptions);

    }

    if (tipoDoc == 'FINANCEIRA') {
      return this.httpClient.delete(
        Parametros.apiurl + '/api/financeira/' + id, this.httpOptions);

    }

    if (tipoDoc == 'PASTA') {
      return this.httpClient.delete(
        Parametros.apiurl + '/api/pasta/' + id, this.httpOptions);

    }

    if (tipoDoc == 'OUTRO') {
      return this.httpClient.delete(
        Parametros.apiurl + '/api/outro/' + id, this.httpOptions);

    }
    return {}
  }

  salvarDocumento(id: Number, documento: Document, tipoDoc: string):any {

    if (tipoDoc == 'CONTRATO') {
      return this.httpClient.put(
        Parametros.apiurl + '/api/contrato/' + id, documento, this.httpOptions);

    }

    if (tipoDoc == 'LICITACAO') {
      return this.httpClient.put(
        Parametros.apiurl + '/api/licitacao/' + id, documento, this.httpOptions);

    }

    if (tipoDoc == 'FINANCEIRA') {
      return this.httpClient.put(
        Parametros.apiurl + '/api/financeira/' + id, documento, this.httpOptions);

    }

    if (tipoDoc == 'PASTA') {
      return this.httpClient.put(
        Parametros.apiurl + '/api/pasta/' + id, documento, this.httpOptions);

    }

    if (tipoDoc == 'OUTRO') {
      return this.httpClient.put(
        Parametros.apiurl + '/api/outro/' + id, documento, this.httpOptions);

    }
    return {};
  }

}
