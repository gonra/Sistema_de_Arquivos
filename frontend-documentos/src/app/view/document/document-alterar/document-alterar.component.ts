import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceDocumentService } from 'src/app/service/service-document.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';
import { MatDialog } from '@angular/material/dialog';
import { Document } from 'src/app/model/document';
import { Location } from 'src/app/model/localizacao';

@Component({
  selector: 'app-document-alterar',
  templateUrl: './document-alterar.component.html',
  styleUrls: ['./document-alterar.component.css']
})
export class DocumentAlterarComponent implements OnInit {
  @Output() backToDocument = new EventEmitter();
  @Input() documentId: number = -1;
  @Input() docSelecionado: string = "";
  @Input() tipoDocumento : string = "";

  formUpdateDocument: FormGroup;
  dataPagamentoLocal: FormControl;
  dataLimiteLocal: FormControl;

  constructor(private formBuilder: FormBuilder,
    public documentService: ServiceDocumentService,
    public loginService: ServiceLoginService) {
      this.dataLimiteLocal = new FormControl('');
      this.dataPagamentoLocal = new FormControl('');
      this.formUpdateDocument = new FormGroup({
        empregadoId: new FormControl(this.loginService.currentEmpregadoId),
        documentoEncaminhamento: new FormControl(''),
        unidadeProdutoraId: new FormControl(''),
        classificacaoDocumentalId: new FormControl(''),
        dataLimite: new FormControl(''),
        dataCriacao: new FormControl(''),
  
        numeroCaixaEscritorioOrigem: new FormControl(''),
        numeroCaixaArquivoCustodia: new FormControl(''),
        numeroContrato: new FormControl(''),
        numeroPec: new FormControl(''),
        empresaContratada: new FormControl(''),
        objetoResumido: new FormControl(''),
  
        numeroProcessoLicitatorio: new FormControl(''),
  
        dataPagamento: new FormControl(''),
        unidadePagamento: new FormControl(''),
  
        localizacao : new FormGroup({      
          endereco: new FormControl(''),
          predio: new FormControl(''),
          sala: new FormControl(''),
          bloco: new FormControl(''),
          posicao: new FormControl(''),
          numeroCaixa: new FormControl('')
        })
      });

  }

  back() {
    this.backToDocument.emit("list");
  }

  update(): void {
    this.backToDocument.emit("list");
  }

  ngOnInit() {
    if (this.documentId > -1) {
      this.loadDataDocument(this.documentId);
    }
  }

  loadDataDocument(id: number) {
    this.formUpdateDocument = this.formBuilder.group({
      empregadoId: this.loginService.currentEmpregadoId,
      documentoEncaminhamento: [''],
      unidadeProdutoraId: [''],
      classificacaoDocumentalId: [''],
      dataLimite: [''],
      dataCriacao:[''],

	    numeroCaixaEscritorioOrigem: [''],
	    numeroCaixaArquivoCustodia: [''],
	    numeroContrato: [''],
	    numeroPec: [''],
	    empresaContratada: [''],
	    objetoResumido: [''],

      numeroProcessoLicitatorio: [''],

      dataPagamento: [''],
	    unidadePagamento: [''],

	    localizacao : this.formBuilder.group({      
        endereco: [''],
        predio: [''],
        sala: [''],
        bloco: [''],
        posicao: [''],
        numeroCaixa: ['']
      })
    });

    this.documentService
      .lerDocumento(id, this.docSelecionado)
      .subscribe((x: any) => this.formUpdateDocument.patchValue(x));

  }

}
