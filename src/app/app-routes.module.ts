import { AuthGuard } from './_guards/auth.guard';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //canActivate : Interface that a class can implement to be a guard deciding if a route can be activated.
  { path: '', component: HomeComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateuserComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports : [
    RouterModule
  ], 
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutesModule { }
