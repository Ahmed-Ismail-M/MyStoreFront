import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
    this.cart = this.cartService.cart;
  }
  addToCart(product: Product): void {
    this.cartService.add(product);
    this._snackBar.open('Added to Cart',"",{duration:1000})
  }
}
