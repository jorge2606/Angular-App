import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm: LoginForm;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';  

  constructor(private http : HttpClient,
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  model = new Login();

  addUserPassword(){
    //this.model.token = "4lKKNa3Zcy";
    this.Logguerarse(this.model);
  }
   // convenience getter for easy access to form fields
   //get f() { return this.loginForm.controls; }

   onSubmit() {
       alert("Guardado");
       //this.addUserPassword();
       this.submitted = true;

       // stop here if form is invalid
       //if (this.loginForm.invalid) {
       //    return;
       //}

       this.loading = true;
       this.authenticationService.login(this.model.Usuario, this.model.Password)
           .pipe(first())
           .subscribe(
               data => {
                   this.router.navigate([this.returnUrl]);
               },
               error => {
                   this.error = error;
                   this.loading = false;
               });
   }

  Logguerarse(log : Login) {
    var User = this.http.post('http://localhost:63098/api/User/Auth/',log);
    // User.forEach(element => {
    //   console.log(element);
    // });
  } 

  ngOnInit() {

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

}
