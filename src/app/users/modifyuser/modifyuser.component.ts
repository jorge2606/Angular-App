import { map } from 'rxjs/operators';
import { UserService } from './../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, modifyUser } from '../users';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  id: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) {
  }
  model = new modifyUser;
  addUser() {
    this.userService.updateUsers(this.model);
    alert("Usuario Modificado");
  }

  onSubmit() {
    this.addUser();
  }
  ngOnInit() {
    //le asigno el id que extraigo de la url
    this.route.params.subscribe(
      p => this.id = p.id
    );

    this.userService.getById(this.id).subscribe(i => {
        this.model.dni = i.dni,
        this.model.userName = i.userName,
        this.model.id = i.id,
        this.model.phoneNumber = i.phoneNumber,
        this.model.rolesUser = i.rolesUser;
    })

  }
}
