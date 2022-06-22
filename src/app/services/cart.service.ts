import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  constructor() {}
  addItem(item:CartItem):CartItem{
    if (this.cart.length > 0) {
      for (let cartItem of this.cart) {
        if (item.product.id == cartItem.product.id) {
          if (item.qty < 1){
            this.remove(item)
            return item
          }
          cartItem.qty = item.qty
          this.saveCart()
        return item}
  }}
  this.cart.push(item);
  this.saveCart();
  return item;
}
  remove(cartItem: CartItem): CartItem[] {
    var index = this.cart.indexOf(cartItem);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
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
  getTotal():string{
    return this.cart.reduce((total, item): number=>{return total + (item.qty*item.product.price)}, 0).toFixed(2)
  }
}
