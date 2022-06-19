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
  productList: Product[] = [];
  cart: Product[] = [];
  constructor(private productService: ProductService , private cartService: CartService) {
    this.productList = this.productService.getProducts();
  }

  ngOnInit(): void {}
  addProduct(product: Product): void {
    this.cart.push(product);
  }
}
