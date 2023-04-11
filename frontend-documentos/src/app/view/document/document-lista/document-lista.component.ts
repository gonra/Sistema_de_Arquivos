import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Document } from 'src/app/model/document';
import { FiltroPesquisaDocumentoDTO } from 'src/app/model/filtro';
import { ServiceDocumentService } from 'src/app/service/service-document.service';

@Component({
  selector: 'app-document-lista',
  templateUrl: './document-lista.component.html',
  styleUrls: ['./document-lista.component.css']
})
export class DocumentListaComponent implements OnInit, OnChanges {

  @Output() backToDocument = new EventEmitter();
  @Output() documentId = new EventEmitter();
  @Input() docSelecionado: string = "";

  action: string = "list";
  documents!: Observable<Document[]>;
  filtro: FiltroPesquisaDocumentoDTO = {};

  displayedColumns = ['id', 'unidadeProdutora', 'documentoEncaminhamento', 'edit', 'delete']

  constructor(private documentService: ServiceDocumentService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listDocuments();
  }

  ngOnInit(): void {
    this.listDocuments();
  }

  listDocuments() {
    this.documents = this.documentService.listarDocumento(this.filtro, this.docSelecionado.toUpperCase());
  }

  editDocument(idDocumento: number) {
    this.backToDocument.emit('edit');
    this.documentId.emit(idDocumento);
  }

  deleteDocument(documentId: number): void {

    this.documentService.deletarDocumento(documentId, this.docSelecionado).subscribe(
      () => {
        ''
        this.listDocuments();
      }
    );

  }
}
