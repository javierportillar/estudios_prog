import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  total:number=0;
  private productCar:Product[]=[
  ]

  addedProduct(product:Product){
    this.productCar.push(product)
  }
  getShoppingCart(){
    return this.productCar;
  }
  sumTotal(){
    for (const item of this.productCar) {
      this.total += item.price; // Sumamos el precio de cada producto al total
    }
    return this.total;
  }
  constructor( ) { }
}
