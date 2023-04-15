import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-documento-ingressado-por-usuario-por-tipo-doc',
  templateUrl: './total-documento-ingressado-por-usuario-por-tipo-doc.component.html',
  styleUrls: ['./total-documento-ingressado-por-usuario-por-tipo-doc.component.css']
})
export class TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  tipoDocSelecionado!: string;
  
  constructor() {}

  displayedColumns = ['usuario', 'totalDocumento']

  ngOnInit(): void {
 
  }

  setTipDocSelected(tipoDocumento: string): void {
    this.tipoDocSelecionado = tipoDocumento;
  }

  back() {
    this.backToUser.emit("init");
  }
}
