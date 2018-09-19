import { User } from './../_models/user';

export class Register extends User{
    dni: number;
    usuario : string;
    password : string;
}