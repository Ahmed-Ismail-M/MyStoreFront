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
        name: (Math.random() + 1).toString(36).substring(7),
        category: (Math.random() + 1).toString(36).substring(7),
        price: Math.random(),
        img_url: `https://picsum.photos/id/${
          Math.floor(Math.random() * 20) + 1
        }/100/100`,
      },
      {
        id: 2,
        name: (Math.random() + 1).toString(36).substring(7),
        category: (Math.random() + 1).toString(36).substring(7),
        price: Math.random(),
        img_url: `https://picsum.photos/id/${
          Math.floor(Math.random() * 20) + 1
        }/100/100`,
      },
    ];
  }

  ngOnInit(): void {}
}
