import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { id } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiURL='https://fakestoreapi.com/products'
  getAllProducts(){
  let a= this.http.get<Product[]>(this.apiURL)
  return a;
  }
  getProductID(id:string){
    let b= this.http.get<Product>(`${this.apiURL}/${id}`)
    return b;
    }
}
