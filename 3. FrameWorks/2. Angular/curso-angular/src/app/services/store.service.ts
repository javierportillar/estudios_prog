import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  total:number=0;
  private productCar:Product[]=[]

  private myCar = new BehaviorSubject<Product[]>([]);
  myCar$= this.myCar.asObservable();


  addedProduct(product:Product){
    this.productCar.push(product)
    this.myCar.next(this.productCar)
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
