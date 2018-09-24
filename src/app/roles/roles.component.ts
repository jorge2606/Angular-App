import { Roles } from './../_models/roles';
import { Component, OnInit } from '@angular/core';
import { User } from '../users/users';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  model : Roles[];
  constructor() { }

  ngOnInit() {
    this.model = [
      {'id' : 12312, 'description' : 'weqweqw'},
      {'id' : 23432, 'description' : 'ewrew'}
    ]
  }

}
