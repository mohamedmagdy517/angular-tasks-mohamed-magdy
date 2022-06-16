import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from './IPosta';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  _url:string="https://jsonplaceholder.typicode.com/posts"
  getProducts():Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url);
  }
}
