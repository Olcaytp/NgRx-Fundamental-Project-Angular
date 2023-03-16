import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { Stores } from 'src/app/state/stores';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // basketCount$ = this.store.select("baskets");  // Eski hali
  basketCount$ = 0; // Yeni hali
  baskets$: BasketModel[] = []

  constructor(
    // private store: Store<{"baskets": BasketModel[]}> // Eski hali
    private store: Store<Stores["baskets"]> // Yeni hali
  ) {
    this.store.select("baskets").subscribe(data => {
      this.basketCount$ = data.length;
      this.baskets$ = data;
    }
    );
  }

}
