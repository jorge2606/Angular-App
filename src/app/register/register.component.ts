import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Register();
  constructor(private userService : UserService) { }

  onSubmit(){
    this.registerUser();
  }

  registerUser(){
    debugger;
    this.userService.register(this.model);
  }
  ngOnInit() {
  }

}
