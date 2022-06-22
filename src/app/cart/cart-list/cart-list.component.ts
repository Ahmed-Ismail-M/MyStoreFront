import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart!: CartItem[]
  total!: number
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cart =JSON.parse(localStorage.getItem('cart') || '[]')
    this.cart = this.cartService.getCart()
    this.total = this.cartService.getTotal()
  }
emptyCart(){
  this.cartService.clear()
  location.reload()
}
}
