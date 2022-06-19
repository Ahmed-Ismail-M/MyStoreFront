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
  products : Product [] = []
  cart : Product [] = []
  constructor(private productService: ProductService , private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
  addToCart(product: Product): void {
    this.cartService.add(product)
    alert('Added')
  }
}
