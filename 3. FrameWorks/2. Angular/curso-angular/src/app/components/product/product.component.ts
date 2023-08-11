import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product={
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  }
  @Output() adirirProducto= new EventEmitter<Product>();
  @Output() mostrarProducto= new EventEmitter<string>();
  
  addCarEvent() {
    this.adirirProducto.emit(this.product)
  }

  showPD(){
    this.mostrarProducto.emit(this.product.id)
  }
}

