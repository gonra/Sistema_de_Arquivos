import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceUserService} from '../../service/service-user.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Output() sendIndexMenu = new EventEmitter();
    @Input() indexMenu: number = 0;

    constructor(private userService: ServiceUserService) {
    }

    ngOnInit(): void {

    }

    setMenu(indexMenu: number) {
        this.indexMenu = indexMenu;
        this.sendIndexMenu.emit(indexMenu)
    }

    active_menu(index: number) {
        return this.indexMenu == index;
    }

    logout() {
        if (confirm("Você  será deslogado, deseja continuar ?")) {
            this.userService.SignOut();
        }
    }

    isAdmin(){
        return this.userService.isAdmin();
    }
}
