import { inject, Injectable, Signal } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from '../storage.service';
import { map, Observable } from 'rxjs';
//
interface State {
  products: ProductItemCart[];
  loader: boolean;
}
//
@Injectable({
  providedIn: 'root'
})
//
export class CartStateService {
 //
 private _storageService = inject(StorageService)
 //
 private initialState: State = {
  products: [],
  loader: false
 };
 //
 loadProducts$ = this._storageService
 .loadProducts()
 .pipe(map((products) => ({ products, loaded: true })));
 //
 state = signalSlice({
  initialState: this.initialState,
  sources: [this.loadProducts$],
  actionSources: {
    add: (state, action$: Observable<ProductItemCart>) =>
      action$.pipe(map((product) => this.add(state, product))),
    /*remove: (state, action$: Observable<number>) =>
      action$.pipe(map((id) => this.remove(state, id))),
    udpate: (state, action$: Observable<ProductItemCart>) =>
      action$.pipe(map((product) => this.update(state, product))),*/
  },
  effects: (state) => ({
    load: () => {
      console.log('State products:',state.products())
     }}),
 });
 // 
 private add(state: Signal<State>, product: ProductItemCart) {
  const isInCart = state().products.find(
    (productInCart) => productInCart.product.id === product.product.id
  );

  if (!isInCart) {
    return {
      products: [...state().products, { ...product, quantity: 1 }],
    };
  }

  isInCart.quantity += 1;
  return {
    products: [...state().products],
  };
}
//
}

