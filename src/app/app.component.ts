import { Component } from '@angular/core';
import { Product } from './Models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://secure.gravatar.com/avatar/2b3b2e2a091bdc9b7c7fe1f1c0bb8bd3?s=120&d=mm&r=g';


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
    }

  ];

  

  onLoaded(img: string){
    console.log ('log Padre', img);
  }

}



