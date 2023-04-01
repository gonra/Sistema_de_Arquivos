import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    menuitem = 0;

    ngOnInit(): void {
        console.log('token', localStorage.getItem('token'));
        console.log('user', localStorage.getItem('user'));
        console.log('user', JSON.parse(localStorage.getItem('user')!));
    }
}
