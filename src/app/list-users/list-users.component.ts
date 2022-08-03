import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


//users!:any;
  //users = ["deekshitha","vishu","arun"];
 users=[
  {id:101, name:"Sumath", email:"suma@gmail.com"},
  {id:102, name:"vishu", email:"vis@gmail.com"},
  {id:103, name:"arun", email:"aur@gmail.com"},
];

//Next Task:ListTaskComponent
tasks = [
  {id:1, name:"Install Java", status:"COMPLETED"},
  {id:2, name:"Install NodeJS", status:"PENDING"},
]
  deleteUser(){
    alert("Successfully Deleted");
  }



}
function deleteUser() {
  throw new Error('Function not implemented.');
}

