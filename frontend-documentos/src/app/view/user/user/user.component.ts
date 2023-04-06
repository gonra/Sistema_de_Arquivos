import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  action: string = "list";
  userId: number = -1;
  
  actionUser(action: string) : void {
    this.action = action;
  }

  actionEditUser(action: string, user: User) : void {
    this.action = action;
  }

  sendIdUser(idEmpregado: number) {
    if(this.action == 'edit') {
      this.userId = idEmpregado;
    }
  }

}
