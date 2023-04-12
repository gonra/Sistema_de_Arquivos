import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ServiceUserService} from "../../../service/service-user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-edit-user-logged',
    templateUrl: './edit-user-logged.component.html',
    styleUrls: ['./edit-user-logged.component.css']
})
export class EditUserLoggedComponent {
    @Output() sendIndexMenu = new EventEmitter();
    @Input() userId: number = -1;

    formUpdateLoggedUser: FormGroup;

    constructor(private formBuilder: FormBuilder,
                public userService: ServiceUserService,
                private router: Router) {
        this.userId = JSON.parse(localStorage.getItem("user")!).idEmpregado;
        this.formUpdateLoggedUser = new FormGroup({
            nome:  new FormControl(''),
            email: new FormControl(''),
        });
    }

    back() {
        this.sendIndexMenu.emit(0);
    }

    ngOnInit(){
        if (this.userId > -1) {
            this.loadDataUser(this.userId);
        }
    }

    loadDataUser(id: number) {
        this.formUpdateLoggedUser = this.formBuilder.group({
            nome:  [''],
            email: [''],
        });

        this.userService.loadUser(id).subscribe(user => this.formUpdateLoggedUser.patchValue(user));
    }

    update() {
        this.userService.updateLoggedUser(this.userId, this.formUpdateLoggedUser.value).subscribe(user => {
            alert("Usuário logado alterado com sucesso!")
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload();
        })
    }
}
