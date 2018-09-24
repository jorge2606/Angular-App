import { AuthGuard } from './_guards/auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth : AuthGuard){}
 isLogged : any;
  
  ngOnInit(){
    this.isLogged = this.auth.ifLogged;
  }
}
