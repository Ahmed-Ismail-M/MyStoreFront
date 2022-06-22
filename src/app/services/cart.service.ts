import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] =JSON.parse(localStorage.getItem('cart')||'[]') ;
  constructor() { 
  }
  add(product: Product): Product[] {
    this.cart.push(product);
    this.saveCart()
    return this.cart
  }
  remove(product:Product): Product[] {
    var index = this.cart.indexOf(product);
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
  getCart():Product[]{
    return this.cart
  }
  saveCart():void{
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }
}
