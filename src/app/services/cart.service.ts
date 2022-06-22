import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] =JSON.parse(localStorage.getItem('cart')||'[]') ;
  constructor() { 
  }
  add(product: Product, qty: number): CartItem[] {
    if (this.cart.length > 0){
      
      this.cart.forEach(function(item){
        if (item.product.id == product.id){
          item.qty = item.qty + qty;
          return item
        }else{
          return false
        }
        }
      )
    }
    this.cart.push({product:product, qty:qty})
    this.saveCart()
    return this.cart
  }
  remove(cartItem :CartItem): CartItem[] {
    var index = this.cart.indexOf(cartItem);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.saveCart()
    return this.cart
  }
  clear(){
    this.cart = []
    this.saveCart()
  }

  getLength(): Number{
    return this.cart.length
  }
  getCart():CartItem[]{
    return this.cart
  }
  saveCart():void{
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }

}
