import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myshoppingCar : Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100
    },
    {
      id: '2',
      name: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100
    },
    {
      id: '3',
      name: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100
    },
    {
      id: '4',
      name: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100
    },
    {
      id: '4',
      name: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100
    }

  ];  

  constructor() { }

  ngOnInit(): void {
  }
  onAddToShoppingCar(product: Product){
    console.log(product);
    this.myshoppingCar.push(product);
    this.total = this.myshoppingCar.reduce((sum, item)=> sum + item.price,0);
  }

}
