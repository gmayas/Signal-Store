import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../../../services/products/states/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../../services/cart/states/cart-state.service';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsStateService]
})
//
export default class ProductListComponent {
  //
  public productsState = inject(ProductsStateService);
  public cartState = inject(CartStateService).state;
  //  
  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.chagePage$.next(page);
  }
  //
  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
  //
}
