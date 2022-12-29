import { EventEmitter, Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList:object[]=[];

  addToCart(data:Product){
    this.productList.push(data);
    return this.productList
  }

  getCart(){
    return this.productList;
  }

}
