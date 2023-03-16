import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api: string = " http://localhost:3000/products"
  products: ProductModel[] = [];
  constructor(
    private _http: HttpClient
  ) {
  }

  post(model: ProductModel, callBack: ()=> void){
    this._http.post(this.api,model).subscribe(res=> callBack()); //best practice

      // let api = "http://localhost:3000/products";
      // this._http.post(this.api,model).subscribe();

  }

  getList(callBack: ()=> void){
    this._http.get<ProductModel[]>(this.api).subscribe(res=> {this.products = res; callBack()}); //best practice
    /**
     * this._http.get<ProductModel[]>(this.api).subscribe(res=> {this.products = res;});
     */
  }
}
