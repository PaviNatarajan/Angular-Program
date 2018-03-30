import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  num1=0;
  num2=0;
  total =0;
  
  sum=function(){
   
   this.total = this.num1 + this.num2;
   return this.total;
  }


  
}
