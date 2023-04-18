import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ServiceReportService} from "../../../service/service-report.service";
import {Observable} from "rxjs";
import {Report_User} from "../../../model/report-user";
import {Report} from "../../../model/report";

@Component({
  selector: 'app-total-caixa-tipo-doc',
  templateUrl: './total-caixa-tipo-doc.component.html',
  styleUrls: ['./total-caixa-tipo-doc.component.css']
})
export class TotalCaixaTipoDocComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  reportNumberOfBoxesByDocsTypes!: Observable<Report[]>;
  constructor(private serviceReport: ServiceReportService) {
    this.reportNumberOfBoxesByDocsTypes = this.serviceReport.listNumberOfBoxesByDocTypes();
  }

  displayedColumns = ['tipoDocumento', 'totalCaixas']

  ngOnInit(): void {
    this.listReportAllDocTypesByUsers();
  }

  listReportAllDocTypesByUsers() {
    this.reportNumberOfBoxesByDocsTypes = this.serviceReport.listNumberOfBoxesByDocTypes();
  }

  back() {
    this.backToUser.emit("init");
  }
}
