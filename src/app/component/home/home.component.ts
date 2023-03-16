import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/products.service';
import { Stores } from 'src/app/state/stores';
import * as BasketActions from '../../state/baskets/baskets.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: ProductModel[] = []
  // constructor(private store: Store // eski hali
  constructor(
    private _product: ProductService,
    private _basket: BasketService
    // private store: Store<Stores["baskets"]> // yeni hali //basket.service.ts den sonra buna gerek kalmadı
  ) {
    this._product.getList(()=> this.products = _product.products);
    console.log(this._product.products);
    // this.products = _product.products; // eski hali
  }

  ngOnInit(): void {
    // this.setProducts(); // eski hali
  }

  // ürünleri oluşturuyoruz // eski hali
  // setProducts(){
  //   for(let i = 0; i < 10; i++){
  //     let product = new ProductModel();
  //     product.id = i;
  //     product.name = `${i} - Product`;
  //     product.unitPrice = i * 10;
  //     product.stock = i * 100;
  //     this.products.push(product);
  //   }
  // }

  addBasket(product: ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;

    // this.store.dispatch({type: "[Baskets] Add Count", "basket": basketModel}); // Eski hali
    // this.store.dispatch(BasketActions.addBasket({"basket": basketModel})); // Yeni hali //basket.service.ts den sonra buna gerek kalmadı
    this._basket.post(basketModel);
  }

}
