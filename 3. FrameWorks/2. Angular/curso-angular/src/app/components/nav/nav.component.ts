import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuState=false; //Desactivado

  toggleMenu(){
    this.menuState=!this.menuState
  }
}
