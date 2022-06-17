import { Injectable } from '@angular/core';
import { Product } from '../products/models/product.model';
import { Random } from '../utils/random';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private random: Random) {}
  getProducts(): Product[] {
    return [
      {
        id: this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price: this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(100, 1) + 1
        }/300/300`,
        descr: this.random.randomString(),
      },
      {
        id: this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price: this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(2000, 1) + 1
        }/300/300`,
        descr: this.random.randomString(),
      },
      {
        id: this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price: this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(2000, 1) + 1
        }/300/300`,
        descr: this.random.randomString(),
      },
    ];
  }
}
