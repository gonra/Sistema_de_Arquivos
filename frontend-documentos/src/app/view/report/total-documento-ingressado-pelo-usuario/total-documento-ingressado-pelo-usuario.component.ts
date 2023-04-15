import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-documento-ingressado-pelo-usuario',
  templateUrl: './total-documento-ingressado-pelo-usuario.component.html',
  styleUrls: ['./total-documento-ingressado-pelo-usuario.component.css']
})
export class TotalDocumentoIngressadoPeloUsuarioComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  usuSelecionado!: string;
  
  constructor() {}

  displayedColumns = ['tipoDocumento', 'totalDocumento']

  ngOnInit(): void {
 
  }

  setUsuSelected(usuario: string): void {
    this.usuSelecionado = usuario;
  }

  back() {
    this.backToUser.emit("init");
  }
}
