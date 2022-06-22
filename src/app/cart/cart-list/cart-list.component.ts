import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart!: Product[]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cart =JSON.parse(localStorage.getItem('cart') || '[]')
    this.cart = this.cartService.getCart()
  }

}
