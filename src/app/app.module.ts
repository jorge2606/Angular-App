import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutesModule } from './app-routes.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor , ErrorInterceptor} from './_helpers/';
import { ModifyuserComponent } from './users/modifyuser/modifyuser.component';
import { RegisterComponent } from './register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modals/modals.component';
//Paginator
import {NgxPaginationModule} from 'ngx-pagination';
import { NavarComponent } from './navar/navar.component';
import { RolesComponent } from './roles/roles.component';
import { CreateRolesComponent } from './roles/create/create.component';
import { TreeviewModule } from 'ngx-treeview';
import { RolesPermissionsComponent } from './roles/roles-permissions/roles-permissions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';

library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CreateuserComponent,
    HomeComponent,
    ModifyuserComponent,
    RegisterComponent,
    NgbdModalContent,
    NavarComponent,
    RolesComponent,
    CreateRolesComponent,
    RolesPermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    FontAwesomeModule,
    TreeviewModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    //fakeBackendProvider    
  ],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
