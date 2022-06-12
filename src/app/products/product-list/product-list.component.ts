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
        id: Math.floor(Math.random() * 2000) + 1,
        name: (Math.random() + 1).toString(36).substring(7),
        category: (Math.random() + 1).toString(36).substring(7),
        price: Math.floor(Math.random() * 2000) + 1,
        img_url: `https://picsum.photos/id/${
          Math.floor(Math.random() * 20) + 1
        }/100/100`,
      },
      {
        id: Math.floor(Math.random() * 2000) + 1,
        name: (Math.random() + 1).toString(36).substring(7),
        category: (Math.random() + 1).toString(36).substring(7),
        price: Math.floor(Math.random() * 2000) + 1,
        img_url: `https://picsum.photos/id/${
          Math.floor(Math.random() * 20) + 1
        }/100/100`,
      },
    ];
  }

  ngOnInit(): void {}
}
