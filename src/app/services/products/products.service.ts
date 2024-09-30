import { Injectable } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiservicesService{

  constructor() {
    super();
  }

  // Función que retorna la informacion de los productos (lista)
  getProducts(){
      return fetch(`${this.apiUrl}/products`)
  };

}
