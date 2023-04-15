import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-documento-por-endereco',
  templateUrl: './total-documento-por-endereco.component.html',
  styleUrls: ['./total-documento-por-endereco.component.css']
})
export class TotalDocumentoPorEnderecoComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  endSelecionado!: string;
  
  constructor() {}

  displayedColumns = ['tipoDocumento', 'totalDocumento']

  ngOnInit(): void {
 
  }

  setDocSelected(endereco: string): void {
    this.endSelecionado = endereco;
  }

  back() {
    this.backToUser.emit("init");
  }
}
