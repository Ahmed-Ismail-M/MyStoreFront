import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/models/product.model';
import { Random } from '../utils/random';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private random: Random, private http:HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:4200/assets/data.json')
  }
}
// [
//   {
//     id: this.random.randomNo(2000, 1),
//     name: this.random.randomString(),
//     category: this.random.randomString(),
//     price: this.random.randomNo(2000, 1),
//     img_url: `https://picsum.photos/id/${
//       this.random.randomNo(100, 1) + 1
//     }/300/300`,
//     descr: this.random.randomString(),
//   },
//   {
//     id: this.random.randomNo(2000, 1),
//     name: this.random.randomString(),
//     category: this.random.randomString(),
//     price: this.random.randomNo(2000, 1),
//     img_url: `https://picsum.photos/id/${
//       this.random.randomNo(2000, 1) + 1
//     }/300/300`,
//     descr: this.random.randomString(),
//   },
//   {
//     id: this.random.randomNo(2000, 1),
//     name: this.random.randomString(),
//     category: this.random.randomString(),
//     price: this.random.randomNo(2000, 1),
//     img_url: `https://picsum.photos/id/${
//       this.random.randomNo(2000, 1) + 1
//     }/300/300`,
//     descr: this.random.randomString(),
//   },
// ];
