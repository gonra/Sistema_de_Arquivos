import { Component } from '@angular/core';
import { ServiceUserService} from "../../service/service-user.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    menuitem = 0;
    user_logged: any;

    constructor(private userService: ServiceUserService) {
    }
    ngOnInit(): void {
        this.user_logged = JSON.parse(localStorage.getItem('user')!);
        console.log('user', this.user_logged);
    }

    setIndexMenu(indexMenu: number){
        this.menuitem = indexMenu;
    }

    isAdmin(){
        return this.userService.isAdmin();
    }
}
