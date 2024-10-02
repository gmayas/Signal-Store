import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../../../services/products/states/products-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [ProductsDetailStateService],
})
export default class ProductDetailComponent {
  //
  productsDetailState = inject(ProductsDetailStateService).state;
  //
  id = input.required<string>();
  //
  constructor() {
    effect(() => {
      this.productsDetailState.getById(this.id());
    });
  }
  //
  addToCart() {
    console.log('Add cart ...');
    /*this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });*/
  }
}
