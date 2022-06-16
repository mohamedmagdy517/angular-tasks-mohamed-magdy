import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  _url:string="https://jsonplaceholder.typicode.com/users"
  getProducts():Observable<Iproduct[]>{

    return this.http.get<Iproduct[]>(this._url);
  }
}
