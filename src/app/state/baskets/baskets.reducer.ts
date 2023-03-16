import { BasketModel } from './../../models/basket.model';
import { createAction, createReducer, on, props } from "@ngrx/store";
import * as BasketActions from "./baskets.action";

export const initialState: BasketModel[]  = [];
// on(createAction("[Baskets] Add Count", props<{"basket": BasketModel}>()), (state, {basket}) => { // eski hali
export const BasketsReducer = createReducer(
  initialState,
  on(BasketActions.addBasket, (state, {basket}) => { // yeni hali

    return [...state, basket];

    /**
     * değişimden önceki hali, app.module.ts'de StoreModule.forRoot({basketCount: BasketsReducer}) şeklinde tanımlanmıştı.
     * 0,
     * on(createAction("[Baskets] Add Count"), (state) => state += 1)
     */
  })
);
