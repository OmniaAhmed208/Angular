import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../models/product';
import productData from '../product.json';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[]= productData;
  numbers:number[]=[1,2,3,4,5,6,7,8];
  cartProduct:any[]=[];
  selectedProduct = '';
  quantity:any[]=[];
  items:any[]=[];
  dataLocal:any[]=[];

  id:any;
  data:any={};

  constructor(private route:ActivatedRoute, private service:ProductService){
    this.id= this.route.snapshot.paramMap.get('id');
    console.log(`id ${this.id}`);
  }

  ngOnInit():void{
    this.getProduct();
  }

  getProduct(){
    this.data = this.products[this.id-1]
  }

  addToCart(i:number,amount:string):void{

    console.log(i);
    if(+(this.selectedProduct) !== 0){

      let productData = {items:this.products[i-1],quantity:amount};
      if('data' in localStorage){
        this.dataLocal = JSON.parse(localStorage.getItem('data')!);

        let exist = this.dataLocal.find(item => item.items.id == productData.items.id);

        if(exist){
          alert('this product is already exist in your cart');
        }
        else{
          this.dataLocal.push(productData);
          localStorage.setItem('data',JSON.stringify(this.dataLocal));
          alert('Added Successfully :)')
        }
      }
      else{
        this.dataLocal.push(productData);
        localStorage.setItem('data',JSON.stringify(this.dataLocal));
        alert('Added Successfully :)')
      }
    }
    else{alert('you should choose number of products')}


    let existing;
    if(localStorage.getItem('data')){
       existing = JSON.parse(localStorage.getItem('data')!);
    }
    
    for(let i =0; i< existing.length;i++){
      if(existing[i].items.id == this.id){
        
        if(existing[i].quantity != this.selectedProduct){
          existing[i].quantity=this.selectedProduct;
          console.log(existing)
          localStorage.setItem("data", JSON.stringify(existing));
          alert('Number of products are Updated')
        }
        
      }
      else{console.log(false)}
    }
  }

  onSelected(value:string,id:any): void {
		this.selectedProduct = value;
	}

}
