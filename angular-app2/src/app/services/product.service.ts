import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
    getProductById(id:any){
      return this.http.get('products/'+id);    
    }

  
}
