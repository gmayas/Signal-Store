import { inject, Injectable } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { ProductsService } from '../products.service';
import { signalSlice } from 'ngxtension/signal-slice';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

interface State {
  product: Product | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsDetailStateService {

  private productsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };

  public state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productsService.getProduct(id)),
          map((data) => ({ product: data, status: 'success' as const })),
          catchError(() => {
            return of({
              products: [],
              status: 'error' as const
            })
          })
        ),
    },
  });

  constructor() {}
}
