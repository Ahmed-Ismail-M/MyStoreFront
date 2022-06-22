import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  constructor() {}
  add(product: Product, qty: number): CartItem[] {
    if (this.cart.length > 0) {
      for (let item of this.cart) {
        if (item.product.id == product.id) {
          return this.increament(item, qty);
        }
      }
    }
    this.cart.push({ product: product, qty: qty });
    this.saveCart();
    return this.cart;
  }
  removeItem(product: Product, qty: number): CartItem[] {
    if (this.cart.length > 0) {
      for (let item of this.cart) {
        if (item.product.id == product.id) {
          if (item.qty - qty > 0) {
            return this.deduct(item, qty);
          } else {
            return this.remove(item);
          }
        }
      }
    }
    return this.cart;
  }
  remove(cartItem: CartItem): CartItem[] {
    var index = this.cart.indexOf(cartItem);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.saveCart();
    return this.cart;
  }
  increament(cartItem: CartItem, qty: number): CartItem[] {
    cartItem.qty = cartItem.qty + qty;
    this.saveCart();
    return this.cart;
  }
  deduct(cartItem: CartItem, qty: number): CartItem[] {
    cartItem.qty = cartItem.qty - qty;
    this.saveCart();
    return this.cart;
  }

  clear() {
    this.cart = [];
    this.saveCart();
  }

  getLength(): Number {
    return this.cart.length;
  }
  getCart(): CartItem[] {
    return this.cart;
  }
  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getTotal():number{
    return this.cart.reduce((total, item): number=>{return total + (item.qty*item.product.price)}, 0)
  }
}
