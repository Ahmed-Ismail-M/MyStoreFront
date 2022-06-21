import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product!: Product;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = JSON.parse(this.route.snapshot.paramMap.get('product') as string)
  }
}
