import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  action: string = "init";
  idUser: string = "-1";
  constructor() { }

  actionUser(action: string) : void {
    this.action = action;
  }
  
  viewDocsUser(idUser: string) : void {
    this.idUser = idUser;
  }

  ngOnInit(): void {
  }

}
