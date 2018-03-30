import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasklist=["go to market","travel to bangalore"];
  sometask="";
  constructor() { }

  ngOnInit() {
  }
addtask=function(){
  console.log("Adding Task"+this.sometask)
  this.tasklist.push(this.sometask)
  console.log("Adding Task"+this.tasklist)
  this.sometask="";
}
deletetask=function(ct){
  this.tasklist.splice(ct,1);
}
}
