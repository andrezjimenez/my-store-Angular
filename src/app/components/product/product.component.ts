import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input () product: Product = {
    id: '',
    price: 0,
    name: '',
    image: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addCar(){
    this.addedProduct.emit(this.product)
  }

}
