import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent {

  username:string='';
  total:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(){

    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.username = params.name
      this.total = params.total
    });

    this.clear()
  }

  clear(){
    window.localStorage.clear()
  }

}
