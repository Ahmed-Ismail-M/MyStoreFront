import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductService , public cartService: CartService) {
  }

  ngOnInit(): void {}
  addToCart(product: Product): void {
    this.cartService.add(product)
  }
}
