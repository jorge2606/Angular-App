import { RoleClaimPermission } from './../_models/role-claim-permission';
import { element } from 'protractor';
import { RoleService } from './../_services/role.service';
import { Roles } from './../_models/roles';
import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'node_modules/ngx-treeview'
import { UpdateRoleClaimPermission } from '../_models/update-role-claim-permission';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  model: Roles;
  constructor(private rolesServices: RoleService) { }

  dropdownEnabled = true;
  items: TreeviewItem[] = [];
  values: number[];
  updateRoleClaimPermission: UpdateRoleClaimPermission = new UpdateRoleClaimPermission()

  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  ngOnInit() {
    //this.service.getAllRole().subscribe(
    // x => this.items = x
    //);
    let id_rol: string = 'e4399321-e1bb-4b83-876d-cb11baa01431';
    this.rolesServices.getAllRole(id_rol).subscribe(claims => {
      this.items = claims.map(x => new TreeviewItem(x));
    });

  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }

  mapToRoleClaimPermission(treeViewItem: TreeviewItem) {
    var roleClaim = new RoleClaimPermission();
    roleClaim.checked = treeViewItem.checked;
    roleClaim.text = treeViewItem.text;
    roleClaim.value = treeViewItem.value;
    if (treeViewItem.children)
      roleClaim.children = treeViewItem.children.map(x => this.mapToRoleClaimPermission(x));
    return roleClaim;
  }

  save() {
    let id_rol: string = 'e4399321-e1bb-4b83-876d-cb11baa01431';
    let childrensUpdate: UpdateRoleClaimPermission;

    this.updateRoleClaimPermission.id = id_rol;

    this.updateRoleClaimPermission.Claims = this.items.map(x => this.mapToRoleClaimPermission(x));

    // this.items.forEach(function(value){
    //       value.children.forEach(function(value1){
    //          //childrensUpdate.childrens. = value1.text;
    //          //childrensUpdate.childrens = value1.value;
    //     });
    // });
    console.log(childrensUpdate);
    this.rolesServices.save(this.updateRoleClaimPermission);
  }
}
