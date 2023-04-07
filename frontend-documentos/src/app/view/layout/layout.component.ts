import { Component } from '@angular/core';
import { ServiceLoginService} from "../../service/service-login.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    menuitem = 0;
    user_logged: any;

    constructor(private userService: ServiceLoginService) {
    }
    ngOnInit(): void {
        this.user_logged = JSON.parse(localStorage.getItem('user')!);
    }

    setIndexMenu(indexMenu: number){
        this.menuitem = indexMenu;
    }

    isAdmin(){
        return this.userService.isAdmin();
    }
}
