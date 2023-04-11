import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceDocumentService } from 'src/app/service/service-document.service';

@Component({
  selector: 'app-document-incluir',
  templateUrl: './document-incluir.component.html',
  styleUrls: ['./document-incluir.component.css']
})
export class DocumentIncluirComponent implements OnInit {
  @Output() backToDocument = new EventEmitter();
  @Input() docSelecionado: string = "";

  formCreateDocument: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public documentService: ServiceDocumentService) {
    this.formCreateDocument = new FormGroup({
      tipoDocumento: new FormControl(''),
      documentoEncaminhamento: new FormControl(''),
      unidadeProdutora: new FormControl('')
    });

  }

  ngOnInit(): void {
    this.formCreateDocument = this.formBuilder.group({
      documentoEncaminhamento: [''],
      unidadeProdutora: ['']
    })
  }

  saveDocument() {
    this.documentService.guardarDocumento(this.formCreateDocument.value, this.docSelecionado).subscribe(() => {
      console.warn("Cadastro realizado com sucesso");
      this.back();
    })

  }

  back() {
    this.backToDocument.emit("list");
  }

}
