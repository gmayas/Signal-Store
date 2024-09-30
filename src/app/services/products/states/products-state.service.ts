import { Injectable } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from '../products.service';
import { BehaviorSubject, map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()

export class ProductsStateService {
  //
  private ProdutsList$: BehaviorSubject<any> = new BehaviorSubject([]);
  //
  // Función asincrona para obtener los prodcutos 
  async getProducts() {
    try {
      let response = await this.productsService.getProducts();
      let products = await response.json()
      console.log('Products: ', products);
      this.ProdutsList$.next(products);
    } catch (e) {
      console.log('Error respose: ', e);
      this.ProdutsList$.next({});
    }
  }

  private initialState: State = {
    products: [],
    status: 'loading' as const
  };

  public state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.ProdutsList$.pipe(map((products) => ({ products, status: 'success' as const }))) //
    ]
  });

  //
  constructor(public productsService: ProductsService) {
    this.ProdutsList$.next([]);
    this.getProducts();
  };

}
