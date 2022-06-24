import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:4200/assets/data.json')
    ;
  }
  getProduct(id: string): Observable<Product | undefined> {
    return this.http
      .get<Product[]>('http://127.0.0.1:4200/assets/data.json')
      .pipe(map((resp) => resp.find((product) => product.id == Number(id))));
  }
}
