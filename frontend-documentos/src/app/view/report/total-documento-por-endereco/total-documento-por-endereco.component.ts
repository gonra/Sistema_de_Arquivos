import { ServiceReportService } from './../../../service/service-report.service';
import { Observable } from 'rxjs';
import { Location } from './../../../model/localizacao';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Report } from 'src/app/model/report';

@Component({
  selector: 'app-total-documento-por-endereco',
  templateUrl: './total-documento-por-endereco.component.html',
  styleUrls: ['./total-documento-por-endereco.component.css']
})
export class TotalDocumentoPorEnderecoComponent implements OnInit {
  @Output() backToUser = new EventEmitter();

  endSelecionado!: string;
  selectedLocation!: string;
  locations!: Observable<Location[]>;
  reportAllDocTypesByAddress!: Observable<Report[]>;

  displayedColumns = ['tipoDocumento', 'totalDocumento']

  constructor(public localizacaoService: ServiceReportService,
    public reportService: ServiceReportService) {
    this.locations = localizacaoService.listLocations();
  }


  ngOnInit(): void {
    this.listLocations();
  }

  onChangeLocation(idAdress: string) : void  {
    this.endSelecionado = idAdress;
    this.reportAllDocTypesByAddress = this.reportService.listAllDocTypesByAddress(this.endSelecionado);
  }

  back() {
    this.backToUser.emit("init");
  }

  listLocations() {
    this.locations = this.localizacaoService.listLocations();
  }

}
