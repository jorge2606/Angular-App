import { Roles } from './../_models/roles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeviewItem } from 'node_modules/ngx-treeview';
import { UpdateRoleClaimPermission } from '../_models/update-role-claim-permission';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRole(id: string) {
    return this.http.get<any[]>('http://localhost:63098/api/Role/getall?id=' + id);
  }

  save(model: UpdateRoleClaimPermission) {
    this.http.put('http://localhost:63098/api/Role/UpdateClaims/', model).subscribe(
      data => {

      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
