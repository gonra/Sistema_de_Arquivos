import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';

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

  
  displayedColumns = ['matricula', 'nome', 'edit', 'delete']

  constructor(private userService: ServiceUserService) {
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
      () => {''
        this.listUsers();
      }
    );

  }
}
