import { Component} from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  action: string = "list";
  documentId: number = -1;
  docSelecionado!: string;

  setDocSelected(documento: string): void {
    this.docSelecionado = documento;
  }

  actionDocument(action: string): void {
    this.action = action;
  }

  actionEditDocument(action: string, document: Document): void {
    this.action = action;
  }

  sendIdDocument(idDocumento: number) {
    if (this.action == 'edit') {
      this.documentId = idDocumento;
    }
  }

}
