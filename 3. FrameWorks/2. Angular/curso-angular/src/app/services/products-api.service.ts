import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product, CreateProductDTO, UpdateProductDTO } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiURL='https://young-sands-07814.herokuapp.com/api/products'
  getAllProducts(){
  let a= this.http.get<Product[]>(this.apiURL)
  return a;
  }
  getProductID(id:string){
    let b= this.http.get<Product>(`${this.apiURL}/${id}`)
    return b;
    }
    create(dto: CreateProductDTO){
      let c = this.http.post<Product>(this.apiURL,dto);
      return c;
    }
    update(id:string,dto:UpdateProductDTO){
      let d = this.http.put<Product>(`${this.apiURL}/${id}`,dto);
      return d;
    }
    delete(id:string){
      let b= this.http.delete<boolean>(`${this.apiURL}/${id}`)
      return b;
      }
    
}
