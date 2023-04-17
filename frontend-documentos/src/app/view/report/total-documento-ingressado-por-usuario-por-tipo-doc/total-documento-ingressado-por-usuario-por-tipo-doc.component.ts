import { Observable } from 'rxjs';
import { ServiceReportService } from './../../../service/service-report.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Report_User } from 'src/app/model/report-user';

@Component({
  selector: 'app-total-documento-ingressado-por-usuario-por-tipo-doc',
  templateUrl: './total-documento-ingressado-por-usuario-por-tipo-doc.component.html',
  styleUrls: ['./total-documento-ingressado-por-usuario-por-tipo-doc.component.css']
})
export class TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  reportAllDocTypesByUsers: Observable<Report_User[]>;
  
  constructor(public serviceReport: ServiceReportService) {
    this.reportAllDocTypesByUsers = serviceReport.listAllDocTypesByUsers();   
  }

  displayedColumns = ['usuario', 'totalDocumento', 'visualizar']

  ngOnInit(): void {
    this.listReportAllDocTypesByUsers();  
  }

  listReportAllDocTypesByUsers() {
    this.reportAllDocTypesByUsers = this.serviceReport.listAllDocTypesByUsers();
  }

  back() {
    this.backToUser.emit("init");
  }
  
  viewDocsUser(idUser: string) {
    this.back();    
  }
}
