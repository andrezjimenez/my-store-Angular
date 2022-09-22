import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { StoreService } from '../../services/store.service';

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

  constructor(
    private storeService: StoreService
  ) { 
    this.myshoppingCar = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  onAddToShoppingCar(product: Product){
    // console.log(product);
    this.storeService.addProduct(product);
    // this.myshoppingCar.push(product);
    this.total = this.storeService.getTotal();
    // this.total = this.myshoppingCar.reduce((sum, item)=> sum + item.price,0);
  }

}
