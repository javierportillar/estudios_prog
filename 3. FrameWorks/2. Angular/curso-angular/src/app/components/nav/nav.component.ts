import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { products } from 'src/app/productList';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  cont:number=0;
  constructor(
    private storeService:StoreService
  ){}
  menuState=false; //Desactivado

  ngOnInit(): void {
    this.storeService.myCar$.subscribe(products=>{
      this.cont=products.length;
    })
  }
  toggleMenu(){
    this.menuState=!this.menuState
  }
}
