import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myshoppingCar : Product[] = [];
  total = 0;
  today = new Date();
  date = new Date(2021,1,21);

  products: Product[] = [
    {
      id: '1',
      title: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100,
      description: '',
      category:''
    },
    {
      id: '2',
      title: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100,
      description: '',
      category:''
    },
    {
      id: '3',
      title: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100,
      description: '',
      category:''
    },
    {
      id: '4',
      title: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100,
      description: '',
      category:''
    },
    {
      id: '4',
      title: 'Product 1',
      image : '../../../assets/images/product.png',
      price : 100,
      description: '',
      category:''
    }
  ];  

  constructor(
    private storeService: StoreService,
    private productsService : ProductsService

  ) { 
    this.myshoppingCar = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      console.log(data)
    });
  }

  onAddToShoppingCar(product: Product){
    // console.log(product);
    this.storeService.addProduct(product);
    // this.myshoppingCar.push(product);
    this.total = this.storeService.getTotal();
    // this.total = this.myshoppingCar.reduce((sum, item)=> sum + item.price,0);
  }

}
