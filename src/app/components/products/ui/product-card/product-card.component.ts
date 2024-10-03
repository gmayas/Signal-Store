import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Product } from '../../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
 // 
 public product = input.required<Product>();
 addToCart = output<Product>();
 //
 add(event: Event) {
  event.stopPropagation();
  event.preventDefault();
  this.addToCart.emit(this.product());
}

}
