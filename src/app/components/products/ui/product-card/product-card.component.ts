import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
[x: string]: any;
 public product = input.required<Product>();
}
