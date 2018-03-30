import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import{RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { TodoComponent } from './task/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path:"catalog",
        component:CatalogComponent
      },
      {
       path:"products",
       component:ProductsComponent
      } ,
      {
        path:"todo",
        component:TodoComponent
      }
    ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
