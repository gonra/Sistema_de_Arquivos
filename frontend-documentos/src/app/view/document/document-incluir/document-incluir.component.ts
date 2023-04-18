import { Component, EventEmitter, Input, OnInit, Output , TemplateRef, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceDocumentService } from 'src/app/service/service-document.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-document-incluir',
  templateUrl: './document-incluir.component.html',
  styleUrls: ['./document-incluir.component.css']
})
export class DocumentIncluirComponent implements OnInit {
  @Output() backToDocument = new EventEmitter();
  @Input() docSelecionado: string = "";

  @ViewChild('modalDialog') infoDialog = {} as TemplateRef<string>;

  dialogRef: any;
  formCreateDocument: FormGroup;
  tipoDocumento: FormControl;
  dataLimiteLocal: FormControl;
  dataPagamentoLocal: FormControl;
  showModal= false;

  constructor(
    private formBuilder: FormBuilder,
    public documentService: ServiceDocumentService,
    public loginService: ServiceLoginService,
    public dialog: MatDialog) {

      this.tipoDocumento = new FormControl('');
      this.dataLimiteLocal = new FormControl('');
      this.dataPagamentoLocal = new FormControl('');
    this.formCreateDocument = new FormGroup({
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

  ngOnInit(): void {
    this.onChangeTipoDocumento();
  }

  onChangeTipoDocumento(){

    this.formCreateDocument =  this.formBuilder.group({
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
  }
  
  salvarDocumento() {
    var dtLimite = new Date(this.dataLimiteLocal.value);
    this.formCreateDocument.value.dataLimite = dtLimite.toISOString().substring(0,10);
    var dtCriacao = new Date();
    this.formCreateDocument.value.dataCriacao = dtCriacao.toISOString().substring(0,10);
    if (this.tipoDocumento.value == "FINANCEIRA") {
      var dtPagamento = new Date(this.dataPagamentoLocal.value);
      this.formCreateDocument.value.dataPagamento = dtPagamento.toISOString().substring(0,10);
    }
    this.documentService.guardarDocumento(this.formCreateDocument.value, this.tipoDocumento.value).subscribe(() => {
      console.warn("Cadastro realizado com sucesso");
      this.openInfoDialog();
    })

  }

  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.infoDialog,
      { data: "Sucesso", height: '300px', width: '400px' });

    this.dialogRef.afterClosed().subscribe(() => {
      this.onChangeTipoDocumento();
    });
  }

  back() {
    this.backToDocument.emit("list");
  }

}
