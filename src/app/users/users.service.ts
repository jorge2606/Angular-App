import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {User} from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http : HttpClient){}

  getAll() {
    return this.http.get<User>('http://localhost:63098/api/User/getall');
  }
  
  ngOnInit(){

  }
}
