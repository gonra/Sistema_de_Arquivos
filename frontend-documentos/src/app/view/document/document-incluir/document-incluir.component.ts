import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceDocumentService } from 'src/app/service/service-document.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';

@Component({
  selector: 'app-document-incluir',
  templateUrl: './document-incluir.component.html',
  styleUrls: ['./document-incluir.component.css']
})
export class DocumentIncluirComponent implements OnInit {
  @Output() backToDocument = new EventEmitter();
  @Input() docSelecionado: string = "";

  formCreateDocument: FormGroup;
  tipoDocumento: FormControl;
  dataLimiteLocal: FormControl;
  showModal= false;

  constructor(private formBuilder: FormBuilder,
    public documentService: ServiceDocumentService,
    public loginService: ServiceLoginService) {

      this.tipoDocumento = new FormControl('');
      this.dataLimiteLocal = new FormControl('');
    this.formCreateDocument = new FormGroup({
      empregadoId: new FormControl(this.loginService.currentEmpregadoId),
      documentoEncaminhamento: new FormControl(''),
      unidadeProdutoraId: new FormControl(''),
      classificacaoDocumentalId: new FormControl(''),
      dataLimite: new FormControl(''),

	    numeroCaixaEscritorioOrigem: new FormControl(''),
	    numeroCaixaArquivoCustodia: new FormControl(''),
	    numeroContrato: new FormControl(''),
	    numeroPec: new FormControl(''),
	    empresaContratada: new FormControl(''),
	    objetoResumido: new FormControl(''),
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

	    numeroCaixaEscritorioOrigem: [''],
	    numeroCaixaArquivoCustodia: [''],
	    numeroContrato: [''],
	    numeroPec: [''],
	    empresaContratada: [''],
	    objetoResumido: [''],
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
    this.documentService.guardarDocumento(this.formCreateDocument.value, this.tipoDocumento.value).subscribe(() => {
      console.warn("Cadastro realizado com sucesso");
      this.back();
      this.showModal = true;
    })

  }

  closeModal() {
    this.showModal = false;
  }

  back() {
    this.backToDocument.emit("list");
  }

}
