import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ServiceDocumentService } from 'src/app/service/service-document.service';
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

  formUpdateDocument: FormGroup;

  unidadeProdutora: string = "";
  dataLimite: string = "";
  dataCriacao: string = "";
  localizacao: Location = { idLocalizacao: 0, endereco: '', predio: '', sala: '', bloco: '', posicao: '', numeroCaixa: '' };
  documentoEncaminhamento: string = "";
  numeroCaixaEscritorioOrigem: string = "";
  numeroCaixaArquivoCustodia: string = "";
  numeroContrato: string = "";
  numeroPec: string = "";
  empresaContratada: string = "";
  objetoResumido: string = "";
  nomeEmpregado: string = "";
  unidadeProdutoraDesc: string = "";
  classificacaoDocumentalDesc: string = "";
  matriculaEmpregado: string = "";
  classificacaoDocumentalId!: Number;

  constructor(private formBuilder: FormBuilder,
    public documentService: ServiceDocumentService) {
    this.formUpdateDocument = new FormGroup({
      documentoEncaminhamento: new FormControl(''),
      unidadeProdutora: new FormControl('')
    });
  }

  back() {
    this.backToDocument.emit("list");
  }

  update(): void {
    /*let document: Document = new Document();
    document.id = this.documentId;
    document.unidadeProdutora = this.unidadeProdutora;
    document.dataLimite = this.dataLimite;
    document.dataCriacao = this.dataCriacao;
    document.localizacao = this.localizacao;
    document.documentoEncaminhamento = this.documentoEncaminhamento;
    document.numeroCaixaEscritorioOrigem = this.numeroCaixaEscritorioOrigem;
    document.numeroCaixaArquivoCustodia = this.numeroCaixaArquivoCustodia;
    document.numeroContrato = this.numeroContrato;
    document.numeroPec = this.numeroPec;
    document.empresaContratada = this.empresaContratada;
    document.objetoResumido = this.objetoResumido;
    document.nomeEmpregado = this.nomeEmpregado;
    document.unidadeProdutoraDesc = this.unidadeProdutoraDesc;
    document.classificacaoDocumentalDesc = this.classificacaoDocumentalDesc;
    document.matriculaEmpregado = this.matriculaEmpregado;
    document.classificacaoDocumentalId = this.classificacaoDocumentalId;

    this.documentService.salvarDocumento(this.documentId, document, this.docSelecionado)
      .subscribe(document => this.formUpdateDocument.patchValue(document));*/
    this.backToDocument.emit("list");
  }

  ngOnInit() {
    if (this.documentId > -1) {
      this.loadDataDocument(this.documentId);
    }
  }

  loadDataDocument(id: number) {
    this.formUpdateDocument = this.formBuilder.group({
      documentoEncaminhamento: [''],
      unidadeProdutora: ['']
    });

    this.documentService
      .lerDocumento(id, this.docSelecionado)
      .subscribe((x: any) => this.formUpdateDocument.patchValue(x));

  }

}
