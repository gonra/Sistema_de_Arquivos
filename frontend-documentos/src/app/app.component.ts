import { Component, OnInit } from '@angular/core';
import { Parametros } from './constant/parametros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{

  title = 'frontend';
  parametros = new Parametros();

}
