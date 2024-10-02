import { Injectable } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
//
const LIMIT = 4; 
//
@Injectable({
  providedIn: 'root'
})
//
export class ProductsService extends ApiservicesService{
  
  // Función que retorna la informacion de los productos (lista)
  getProducts(page: number):Observable<Product[]>{
       return this.http.get<any[]>(`${this.apiUrl}/products`,{
        params: {
          limit: page * LIMIT
        }});
      };

  // Función que retorna la informacion de producto segun su ID
  getProduct(id: string):Observable<Product>{
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
   };
  // 
};
