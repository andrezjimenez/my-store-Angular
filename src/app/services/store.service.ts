import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myshoppingCar : Product[] = [];

  constructor() { }

  addProduct(product : Product){
    this.myshoppingCar.push(product);
  }

  getShoppingCart(){
    return this.myshoppingCar;
  }
  
  getTotal(){
    return this.myshoppingCar.reduce((sum, item)=> sum + item.price,0);
  }

}
