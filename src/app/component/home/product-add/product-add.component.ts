import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  @ViewChild("addForm") addForm: NgForm;
  constructor(
    private _product: ProductService,
    private router: Router
  ) { }

  addProduct(){
    if(this.addForm.valid){
      this._product.post(this.addForm.value, ()=> this.addForm.reset());
      this.router.navigateByUrl('/')
    }
  }
}
