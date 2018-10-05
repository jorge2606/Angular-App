import { Roles, RoleUserDto } from './../_models/roles';
import { NgbdModalContent } from './../modals/modals.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from './users';
import { RoleService } from '../_services/role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  page = 0;
  user_list: User[];
  roles_list : Roles;
  col_size : number;
  itemsPerPage : number = 2;
  value : number;

  changeRolDto = new RoleUserDto();
  
  constructor(private var_user_service: UserService, private modalService: NgbModal, private RolesService : RoleService) { }

  ngOnInit() {
    this.getAllUsers(this.page);
    this.getAllRoles();
  }

  loadPage(page : number){
  if (page != 0){
    this.getAllUsers(page-1);
  }
     
  }
  getAllUsers(page : number): void {
    this.var_user_service.getPaginator(page).subscribe(result => {
      this.user_list = result.list
      this.col_size = result.totalRecords
      
  });
 
  }
  //MODALS
  openEliminar(id: number, dni: number, usuario: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.Encabezado = "Eliminar";
    modalRef.componentInstance.Contenido = "¿Desea eliminar a " + dni + " " + usuario + "?";
    modalRef.componentInstance.GuardaroEliminar = "Eliminar";
    modalRef.result.then(() => {
      this.var_user_service.deleteUser(id).subscribe(
        data => {
            this.getAllUsers(this.page);
        },
        error => {
            console.log("error", error);
        }
    );;
    },
      () => {
        console.log('Backdrop click');
    })
  }

  //Obtener todos los roles y listarlos en un select 
  getAllRoles(): void {
    this.RolesService.getAll().subscribe(result => {      
        this.roles_list = result
    });
  }

  saveRolUser(idUser:number, idRol : number){
    this.changeRolDto.rolId = idRol;
    this.changeRolDto.userId = idUser;
    this.var_user_service.SaveUserRoles(this.changeRolDto);
  }

}
