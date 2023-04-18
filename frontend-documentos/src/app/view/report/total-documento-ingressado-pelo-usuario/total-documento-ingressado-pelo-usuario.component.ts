import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceUserService} from "../../../service/service-user.service";
import {ServiceReportService} from "../../../service/service-report.service";
import {Report_User} from "../../../model/report-user";

@Component({
    selector: 'app-total-documento-ingressado-pelo-usuario',
    templateUrl: './total-documento-ingressado-pelo-usuario.component.html',
    styleUrls: ['./total-documento-ingressado-pelo-usuario.component.css']
})
export class TotalDocumentoIngressadoPeloUsuarioComponent implements OnInit {
    @Output() backToUser = new EventEmitter();
    @Input() idUser = -1;

    userSelecionado!: string;

    allTypesDocsByUser! : [];

    constructor(private serviceReportService: ServiceReportService) {
    }

    displayedColumns = ['tipoDocumento', 'totalDocumento']

    ngOnInit(): void {
        console.log('this.idUser', this.idUser)
        if (this.idUser > -1) {
            this.listAllDocTypesByUser(this.idUser);
        }
    }

    listAllDocTypesByUser(idUser: number) {
        this.serviceReportService.listAllDocTypesByUser(idUser).subscribe(e => {
            this.allTypesDocsByUser = e[0].qtdTiposDocs;
        });
    }

    back() {
        this.backToUser.emit("totDocIngPorUsu");
    }
}
