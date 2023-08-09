import { Component } from '@angular/core';
// import { products } from "../../productList";
import { Product } from "../../models/product.model";
import { StoreService } from "../../services/store.service";
import { ProductsApiService } from "../../services/products-api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  total:number=0;
  products:Product[]=[];
  productCar: Product[]=[]
 
  constructor(
    private storeService: StoreService,
    private productsApiService: ProductsApiService

  ){
    this.productCar = this.storeService.getShoppingCart();
  }
  productAdded(product:Product){
    console.log(product);
    this.storeService.addedProduct(product);
    this.total= this.storeService.sumTotal();
    
    // this.total=this.productCar.reduce((sum,item)=>sum+item.price,0)
  }
  ngOnInit() {
    this.productsApiService.getAllProducts()
    .subscribe(data=>{
      this.products=data;
    })
     
    //before render
    //asyn - fetch -- once time
  }
  
}




/* 
  ngOnDestroy() {
    //delete render
    console.log('ngOnDestroy');
    window.clearInterval(this.contFuct);
  
  }
  constructor(){
    //before render
    //NO async -- once time 
    console.log('constructor','imgValue=>', this.showImg );
  }
  ngOnChanges(changes: SimpleChanges): void {
     //before - during render
    //changes inputs -- times
    console.log('ngOnChanges','imgValue=>', this.imagHijo );
  }
  ngOnInit() {
    //before render
    //asyn - fetch -- once time
    console.log('ngOnInit');
    //   this.contFuct= window.setInterval(()=>{
    //   this.cont+=1;
    //   console.log('Cont corrido');
    // },500)
  }
  ngAfterViewInit() {
    //after render
    //handle children (componentes hijos que reciben parametros)
    console.log('ngAfterViewInit');
  }
*/