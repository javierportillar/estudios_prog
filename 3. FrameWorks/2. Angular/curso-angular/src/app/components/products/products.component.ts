import { Component } from '@angular/core';
import { products } from "../../productList";
import { Product } from "../../models/product.model";
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  total:number=0;
  products=products;
  productCar:Product[]=[
    {image:'',
    price:0}
  ]
 
  constructor(
    private storeService: StoreService
  ){
    this.productCar = this.storeService.getShoppingCart();
  }
  productAdded(product:Product){
    console.log(product);
    this.storeService.addedProduct(product);
    this.total= this.storeService.sumTotal();
    
    // this.total=this.productCar.reduce((sum,item)=>sum+item.price,0)
  }
}
