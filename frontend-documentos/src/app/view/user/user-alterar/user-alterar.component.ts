import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceLoginService } from 'src/app/service/service-login.service';
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-user-alterar',
  templateUrl: './user-alterar.component.html',
  styleUrls: ['./user-alterar.component.css']
})
export class UserAlterarComponent {
  @Output() backToUser = new EventEmitter();
  @Input() userId: number = -1;

  formUpdateUser: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    public userService: ServiceUserService) {
      this.formUpdateUser = new FormGroup({
        matricula:  new FormControl(''),
        nome:  new FormControl(''),
        email: new FormControl(''),
        departamentoId: new FormControl(''),
        ativo: new FormControl(''),
        senha: new FormControl('')
      });
  }
  
  back() {
    this.backToUser.emit("list");
  }

  update() {
    this.userService.updateUser(this.userId, this.formUpdateUser.value).subscribe(() => {
      console.warn("Empregado atualizado com sucesso");
      this.back();
    })
  }

  ngOnInit() {
    if (this.userId > -1) {
      this.loadDataUser(this.userId);
    }
  }

  loadDataUser(id: number) {
    this.formUpdateUser = this.formBuilder.group({
      matricula:  [''],
      nome:  [''],
      email: [''],
      departamentoId: [''],
      ativo: [''],
      senha: ['']
    });

    //this.userService.loadUser(id).subscribe((user: any) => {
    //  console.log(user);
    //})

    this.userService.loadUser(id).subscribe(user => this.formUpdateUser.patchValue(user));

    
  }
}
