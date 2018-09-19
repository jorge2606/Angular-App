import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users'
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private http : HttpClient, private UserService : UserService) {}
  model = new User();
  addUser(){
    this.UserService.createWithObjectUser(this.model);
  }

  onSubmit(){
    this.addUser();
  }
  
  ngOnInit() {
  }

}
