import { Injectable } from '@angular/core';
import { Product } from '../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] =JSON.parse(localStorage.getItem('cart')||'[]') ;
  constructor() { 
  }
  add(product: Product): Product[] {
    this.cart.push(product);
    return this.cart
  }
  remove(product:Product): Product[] {
    var index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    return this.cart
  }
  clear(){
    this.cart = []
  }

  getLength(): Number{
    return this.cart.length
  }
  getCart():Product[]{
    return this.cart
  }
}
