import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users'

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private http : HttpClient) {}
  model = new User();
  addUser(){
    this.createUsers(this.model);
  }

  createUsers(user : User) {
    this.http.post('http://localhost:63098/api/User/',user);
  }

  onSubmit(){
    this.addUser();
    alert("Guardado");
  }
  ngOnInit() {
  }

}
