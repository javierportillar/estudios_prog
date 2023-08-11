import { Component } from '@angular/core';
import { person } from "../../productList";
import { Product, CreateProductDTO, UpdateProductDTO } from "../../models/product.model";
import { StoreService } from "../../services/store.service";
import { ProductsApiService } from "../../services/products-api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private storeService: StoreService,
    private productsApiService: ProductsApiService

  ) {
    this.productCar = this.storeService.getShoppingCart();
  }
  productDeState = false;
  total: number = 0;
  products: Product[] = [];
  productCar: Product[] = []
  productChosen: Product = {
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
  imagJavi = person.avatar;

  editarProducto(){
    const cambios:UpdateProductDTO ={
      title:'nuevo title',
    }
    const id = this.productChosen.id;

    this.productsApiService.update(id,cambios)
    .subscribe(data=>{
      const productIndex= this.products.findIndex(index=>index===this.productChosen)
      this.products[productIndex]=data;
    })
  }

  productIndicated(id: string) {
    console.log('id');
    this.productsApiService.getProductID(id)
      .subscribe(data => {
        console.log(this.productChosen);

        this.togglePD();
        this.productChosen = data;
      })
  }

  togglePD() {
    this.productDeState = !this.productDeState;
    console.log('Prueba clicl PD', this.productDeState);
  }

  productAdded(product: Product) {
    console.log(product);
    this.storeService.addedProduct(product);
    this.total = this.storeService.sumTotal();
    // this.total=this.productCar.reduce((sum,item)=>sum+item.price,0)
  }
  ngOnInit() {
    this.productsApiService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })

    //before render
    //asyn - fetch -- once time
  }

  addNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo prodcuto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    }
    this.productsApiService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    });
  }

  deleteProduct(){
    const id= this.productChosen.id;
    this.productsApiService.delete(id)
    .subscribe(()=>{
      const productIndex= this.products.findIndex(index=>index===this.productChosen)
      this.products.splice(productIndex,1);
      this.productDeState=false;
    })
  }
}

  /*

*/




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