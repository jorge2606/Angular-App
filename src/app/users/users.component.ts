import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from './users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  user_list : User;

  constructor(private var_user_service : UserService){}
    
    ngOnInit() {
      this.getAllUsers();
    }

    eliminarUsuario(id : number){
      this.var_user_service.deleteUser(id);
    }

    getAllUsers(): void {
      this.var_user_service.getAll().subscribe(users => {
        this.user_list = users
      });
    }    
    
}
