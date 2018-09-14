import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {login_var} from './mock-login';
import { Login } from './login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUserAndPassword():Observable<Login[]>{ return of(login_var); }
}
