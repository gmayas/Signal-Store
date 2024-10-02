import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  //
  http = inject(HttpClient);
  public apiUrl = environment.API_URL;
  //
  constructor() { }

}
