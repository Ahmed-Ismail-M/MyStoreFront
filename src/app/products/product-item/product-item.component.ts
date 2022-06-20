import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product!: Product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const product = this.route.snapshot.paramMap.get('product')
    console.log(product)
  }
}
