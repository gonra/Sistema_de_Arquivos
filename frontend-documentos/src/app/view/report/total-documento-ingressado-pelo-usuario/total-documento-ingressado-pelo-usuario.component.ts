import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-documento-ingressado-pelo-usuario',
  templateUrl: './total-documento-ingressado-pelo-usuario.component.html',
  styleUrls: ['./total-documento-ingressado-pelo-usuario.component.css']
})
export class TotalDocumentoIngressadoPeloUsuarioComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  @Input() idUser = "-1";
  
  usuSelecionado!: string;
  
  constructor() {}

  displayedColumns = ['tipoDocumento', 'totalDocumento']

  ngOnInit(): void {
    if (this.idUser != "-1") {
      this. loadDataUser(this.idUser);
    }
  }

  setUsuSelected(usuario: string): void {
    this.usuSelecionado = usuario;
  }

  back() {
    this.backToUser.emit("init");
  }
}
