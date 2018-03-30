import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product=["bicuit","choci"];
  constructor() { }

  ngOnInit() {
  }
giftme=function(i){
  alert("Buy me this"+this.product[i]);
}
}
