import { Injectable } from '@angular/core';
import { ProductItemCart } from '../../shared/interfaces/product.interface';
import { Observable, of } from 'rxjs';
//
@Injectable({
  providedIn: 'root'
})
//
export class StorageService {
  //
  loadProducts(): Observable<ProductItemCart[]> {
    const rowProducts = localStorage.getItem('products');
    return of(rowProducts ? JSON.parse(rowProducts) : []);
  };
  //
  saveProduct(products: ProductItemCart): void{
    localStorage.setItem('products', JSON.stringify(products));
  };
  //
}
