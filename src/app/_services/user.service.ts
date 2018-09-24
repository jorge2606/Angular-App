import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../users/users';
import { Register } from '../register/register';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:63098/api/User/getall');
    }

    getPaginator(page : number){
        return this.http.get<any>('http://localhost:63098/api/User/page/'+page);
    }

    getById(id: number) {
        return this.http.get<User>('http://localhost:63098/api/User/getbyid/' + id);
    }

    updateUsers(user: User) {
        this.http.put('http://localhost:63098/api/User/', user).subscribe(
            data => {
                console.log("PUT Request is successful ", data);
            },
            error => {
                console.log("Rrror", error);
            }
        );
    }

    createWithObjectUser(user: User) {
        this.http.post('http://localhost:63098/api/User/', user).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Rrror", error);
            }
        );
    }

    deleteUser(id : number){
        return this.http.delete('http://localhost:63098/api/User/'+id);
    }

    register(user : Register){
        this.http.post('http://localhost:63098/api/User/register', user).subscribe(
            data => {
                console.log("REGISTER Request is successful ", data);
            },
            error => {
                console.log("Rrror", error);
            }
        );
    }
}