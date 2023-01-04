import { Component } from '@angular/core';
import productData from '../product.json';
import {Product} from '../models/product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[]= productData;
  productList:object[]=[];
  cartProduct:any[]=[];
  items:any[]=[];
  data:any[]=[];

  numbers:number[]=[1,2,3,4,5,6,7,8];
  selectedProduct = '';

  constructor(private cart: CartService){}

  ngOnInit():void{

    this.productList = this.cart.getCart()
  }

  addCart(event:any){
    console.log(event)
  }

  onSelected(value:string,index:number): void {
		this.selectedProduct = value;
  }

    buy(amount:any,index:number):void{
      // console.log(`item ${this.products[index].id}`)
      if(amount != 0){
        // console.log(amount)
        let productData = {items:this.products[index],quantity:amount};
        if('data' in localStorage){
          this.data = JSON.parse(localStorage.getItem('data')!);

          let exist = this.data.find(item => item.items.id == productData.items.id);

          if(exist){
            alert('this product is already exist in your cart');

            let existing;
            if(localStorage.getItem('data')){
              existing = JSON.parse(localStorage.getItem('data')!);
            }
            for(let i =0; i< existing.length;i++){
              if(existing[i].items.id == index){
                existing[i-1].quantity = amount;
                localStorage.setItem("data", JSON.stringify(existing));
                alert('Number of products are Updated')
              }
              else(console.log(false))
            }

          }
          else{
            this.data.push(productData);
            localStorage.setItem('data',JSON.stringify(this.data));
            alert('Added Successfully :)')
          }
        }
        else{
          this.data.push(productData);
          localStorage.setItem('data',JSON.stringify(this.data));
          alert('Added Successfully :)')
        }
      }
      if(amount == 0){
        alert('you should choose number of products')
      }
  }
}
