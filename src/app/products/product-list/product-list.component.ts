import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'test',
        category: 'test cat',
        price: 2.4,
        img_url: `https://picsum.photos/id/${
          Math.floor(Math.random() * 20) + 1
        }/100/100`,
      },
    ];
  }

  ngOnInit(): void {}
}
