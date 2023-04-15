import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-caixa-tipo-doc',
  templateUrl: './total-caixa-tipo-doc.component.html',
  styleUrls: ['./total-caixa-tipo-doc.component.css']
})
export class TotalCaixaTipoDocComponent implements OnInit {
  @Output() backToUser = new EventEmitter();
  
  constructor() {}

  displayedColumns = ['tipoDocumento', 'totalCaixas']

  ngOnInit(): void {
 
  }

  back() {
    this.backToUser.emit("init");
  }
}
