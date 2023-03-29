import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Parametros } from '../constant/parametros';
import { Document } from '../model/document';
import { Location } from '../model/localizacao';
import { Report } from '../model/report';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceReportService {

  etapa: Number = 1;
  token = "";

  constructor(private httpClient: HttpClient) { }

  setToken(token:string) {
    this.token = token;
  }
}
