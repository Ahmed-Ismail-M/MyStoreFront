import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cart!: CartItem[];
  total!: string;
  user: User = { full_name: '', address: '', cc: '' };
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  addCartItem(cartItem: CartItem) {
    this.cartService.addItem(cartItem);
    this.total = this.cartService.getTotal();
  }
  removeCartItem(cartItem: CartItem) {
    this.cartService.remove(cartItem);
    this.total = this.cartService.getTotal();
  }
  confirm() {
    if (Number(this.total) > 0) {
      this.router.navigateByUrl('confirmation', {
        state: { user: this.user, total: this.total },
      });
    }
  }
}
