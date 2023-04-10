import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Document } from 'src/app/model/document';
import { ServiceDocumentService } from 'src/app/service/service-document.service';

@Component({
  selector: 'app-document-lista',
  templateUrl: './document-lista.component.html',
  styleUrls: ['./document-lista.component.css']
})
export class DocumentListaComponent implements OnInit {

  @Output() backToDocument = new EventEmitter();
  @Output() documentId = new EventEmitter();
  @Input() docSelecionado: string = "";

  action: string = "list";
  documents!: Observable<Document[]>;

  displayedColumns = ['id', 'unidadeProdutora', 'edit', 'delete']

  constructor(private documentService: ServiceDocumentService) {
  }

  ngOnInit(): void {
    this.listDocuments();
  }

  listDocuments() {
    this.documents = this.documentService.listarDocumento({}, this.docSelecionado);
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
