import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { BasketsReducer } from './state/baskets/baskets.reducer';
import { CountComponent } from './component/count/count.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { AddCountComponent } from './component/add-count/add-count.component';
import { NavbarComponent } from './component/layouts/navbar/navbar.component';
import { ProductAddComponent } from './component/home/product-add/product-add.component';

import { Reducers } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    AddCountComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot({ngrxNumber: counterReducer})
    // StoreModule.forRoot({"basketCount": BasketsReducer}) // BasketsReducer'dan gelen değerleri basketCount olarak kullanacağım. Eski hali
    // StoreModule.forRoot({"baskets": BasketsReducer}) // BasketsReducer'dan gelen değerleri basketCount olarak kullanacağım. Yeni hali
    StoreModule.forRoot(Reducers.baskets)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
