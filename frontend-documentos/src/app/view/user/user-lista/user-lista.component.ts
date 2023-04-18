import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from 'src/app/model/user';
import {ServiceUserService} from 'src/app/service/service-user.service';
import {ServiceLoginService} from 'src/app/service/service-login.service';
import {FiltroPesquisaEmpregadoDTO} from 'src/app/model/filtro';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-user-lista',
    templateUrl: './user-lista.component.html',
    styleUrls: ['./user-lista.component.css']
})
export class UserListaComponent implements OnInit {

    @Output() backToUser = new EventEmitter();
    @Output() userId = new EventEmitter();

    action: string = "list";
    users: Observable<User[]>;
    ativo: string = "";
    email: string = "";
    matricula: string = "";
    nome: string = "";
    unidadeDepartamento: string = "";
    filtro: FiltroPesquisaEmpregadoDTO = {};


    displayedColumns = ['matricula', 'nome', 'email', 'depart', 'admin', 'edit', 'delete']

    constructor(private userService: ServiceUserService, private router: Router) {
        this.users = userService.listUsers(this.ativo, this.email, this.matricula, this.nome, this.unidadeDepartamento);
    }

    ngOnInit(): void {
        this.listUsers();
    }

    listUsers() {
        this.users = this.userService.listUsers(this.ativo, this.email, this.matricula, this.nome, this.unidadeDepartamento);
    }

    editUser(idEmpregado: number) {
        this.backToUser.emit('edit');
        this.userId.emit(idEmpregado);
    }

    deleteUser(userId: number): void {

        this.userService.deleteUser(userId).subscribe(
            () => {
                ''
                this.listUsers();
            }
        );

    }

    isAdmin(roles: []) {
        let isAdmin = roles.filter((u: string | string[]) => u.includes('ADMIN'));
        return isAdmin.length > 0;
    }

    turnOn(id: number){
        this.userService.toggleAdmin(id, true).subscribe({
            next: (res: any) => {
                alert("Administrador ativado para este usuário");
                this.listUsers();
            },
            error: (error: HttpErrorResponse) => {
                if (error.status == 401) {
                    alert("Seu login expirou, faça login novamente!")
                    this.router.navigate(['/login'])
                }else
                    alert("Ocorreu um erro, contate o administrador do sistema.");
            }
        });
    }

    turnOff(id: number){
        this.userService.toggleAdmin(id, false).subscribe({
            next: (res: any) => {
                alert("Administrador desativado para este usuário")
                this.listUsers();
            },
            error: (error: HttpErrorResponse) => {
                if (error.status == 401) {
                    alert("Seu login expirou, faça login novamente!")
                    this.router.navigate(['/login'])
                }else
                    alert("Ocorreu um erro, contate o administrador do sistema.");
            }
        });
    }
}
