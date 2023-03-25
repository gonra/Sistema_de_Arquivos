import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem:string = "";
  loginForm : any;

  constructor() {
    this.loginForm = new FormGroup({
      matricula: new FormControl(''),
      senha : new FormControl('')
    }); 
  }

  ngOnInit(): void {

  }

  doLogin(): void {

  }
}
