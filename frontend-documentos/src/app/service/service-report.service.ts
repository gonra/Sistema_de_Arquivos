import {Report} from './../model/report';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Parametros} from '../constant/parametros';
import {Document} from '../model/document';
import {Location} from '../model/localizacao';
import {Router} from '@angular/router';
import {Report_User} from '../model/report-user';

@Injectable({
    providedIn: 'root'
})
export class ServiceReportService {

    etapa: Number = 1;
    token = "";

    private readonly urlModule = Parametros.apiurl + "/api/localizacoes";
    private readonly urlReportModule = Parametros.apiurl + "/api/reports/docs_address/";
    private readonly urlReportModuleUser = Parametros.apiurl + "/api/reports/docs_users/";

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

    listLocations(): Observable<Location[]> {
        return this.httpClient.get<Location[]>(this.urlModule, this.httpOptions);
    }

    listAllDocTypesByAddress(idAddress: string): Observable<Report[]> {
        return this.httpClient.get<Report[]>(this.urlReportModule + idAddress, this.httpOptions);
    }

    listAllDocTypesByUsers(): Observable<Report_User[]> {
        return this.httpClient.get<Report_User[]>(this.urlReportModuleUser, this.httpOptions);
    }

    listAllDocTypesByUser(idUser: number): Observable<Report_User[]> {
        return this.httpClient.get<Report_User[]>(this.urlReportModuleUser + idUser, this.httpOptions);
    }

}
