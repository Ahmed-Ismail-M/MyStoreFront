import { Component, OnInit } from '@angular/core';
import { Random } from 'src/app/utils/random';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private random: Random) {
    this.productList = [
      
      {
        id: this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price:this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(100, 1) + 1
        }/100/100`,
        descr : this.random.randomString()
      },
      {
        id:this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price:this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(200, 1) + 1
        }/100/100`,
        descr : this.random.randomString()
      },
      {
        id:this.random.randomNo(2000, 1),
        name: this.random.randomString(),
        category: this.random.randomString(),
        price:this.random.randomNo(2000, 1),
        img_url: `https://picsum.photos/id/${
          this.random.randomNo(200, 1) + 1
        }/100/100`,
        descr : this.random.randomString()
      },
    ];
  }

  ngOnInit(): void {
  }
}
