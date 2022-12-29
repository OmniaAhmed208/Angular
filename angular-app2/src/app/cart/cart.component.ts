import { Component,EventEmitter,Input, Output } from '@angular/core';
import productData from '../product.json';
import { CartService } from '../services/cart.service';
import {Product} from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  sendData(){}

  products: Product[]= productData;
  data:any[]=[];
  quantity:any[]=[];
  numbers:number[]=[1,2,3,4,5,6,7,8];
  selectedProduct = '';
  total:any=0

  username:string='';
  address:string='';
  credit:string='';

  constructor(private service:CartService, private route:Router){}

  ngOnInit(){
    // prepare page too show items from local storage
    this.getCartProducts()
  }

  // send for congratulation page
  sendToCongrats(){
    this.route.navigate(['/congrats/'],{queryParams:{name:this.username,total:this.total}})
  }

  onSubmit():void{

    username:this.username;
    address:this.address;
    credit:this.credit
  }

  // show Item from local storage
  getCartProducts(){
    if('data' in localStorage){
      this.data = JSON.parse(localStorage.getItem('data')!);
    }
    this.getTotal()
  }

  // Select Number of Products
  onSelected(value:string,i:number): void {
		this.selectedProduct = value;
    console.log(this.selectedProduct);

    let existing;
    if(localStorage.getItem('data')){
       existing = JSON.parse(localStorage.getItem('data')!);
    }

    console.log(existing[i].quantity=this.selectedProduct);
    console.log(existing[i]);
    this.getTotal();
    localStorage.setItem("data", JSON.stringify(existing));
	}

  // Delete produtc
  deleteProduct(index:number){
    this.data.splice(index,1);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.getTotal();
    // this.reload()
  }

  //Get Total Pirce
  getTotal(){
    this.total = 0;
    for(let i in this.data){
      let quantity = this.data[i].quantity;
      let price = +((this.data[i].items.price).toFixed(1));
      this.total += quantity * price;
    }
  }

  // reload Page
  reload(){
    window.location.reload();
  }
}
