import { Component } from '@angular/core';
import { products } from "../../productList";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products=products;
}
