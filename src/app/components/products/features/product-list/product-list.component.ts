import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../../../services/products/states/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsStateService]

})
export default class ProductListComponent {
  //
  public productsState = inject(ProductsStateService);  
  
  
  constructor() { }

  

  

}
