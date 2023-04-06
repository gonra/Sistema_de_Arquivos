import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdmuserService } from 'src/app/service/service-admuser.service';
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-user-incluir',
  templateUrl: './user-incluir.component.html',
  styleUrls: ['./user-incluir.component.css']
})
export class UserIncluirComponent implements OnInit {
  
  @Output() backToUser = new EventEmitter();

  formCreateUser: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    public userService: ServiceAdmuserService) {
      this.formCreateUser = new FormGroup({
        matricula:  new FormControl(''),
        nome:  new FormControl('')
      });

  }

  ngOnInit(): void {
    this.formCreateUser = this.formBuilder.group({
      matricula:  [''],
      nome:  ['']
    })
  }

  saveUser() {
    this.userService.saveUser(this.formCreateUser.value).subscribe(() => {
          console.warn("Cadastro realizado com sucesso");
          this.back();
    })

  }

  back() {
    this.backToUser.emit("list");
  }
 
}
