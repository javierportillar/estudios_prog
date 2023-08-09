import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
  let a= this.http.get<Product[]>('https://fakestoreapi.com/products')
  return a;
  }
}
