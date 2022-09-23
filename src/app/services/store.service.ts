import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myshoppingCar : Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product : Product){
    this.myshoppingCar.push(product);
    this.myCart.next(this.myshoppingCar)
  }

  getShoppingCart(){
    return this.myshoppingCar;
  }
  
  getTotal(){
    return this.myshoppingCar.reduce((sum, item)=> sum + item.price,0);
  }

}
