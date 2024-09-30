import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  //
  public apiUrl = environment.API_URL;
  //
  constructor() { }

}
