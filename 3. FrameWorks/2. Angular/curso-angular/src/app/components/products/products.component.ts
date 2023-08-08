import { Component } from '@angular/core';
import { products } from "../../productList";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  total=0;
  products=products;
  productCar:Product[]=[
    {image:'',
    price:0}
  ]
  productAdded(product:Product){
    console.log(product);
    this.productCar.push(product)
    for (const item of this.productCar) {
      this.total += item.price; // Sumamos el precio de cada producto al total
    }
    // this.total=this.productCar.reduce((sum,item)=>sum+item.price,0)
  }
}
