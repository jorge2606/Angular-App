import { User } from './../users/users';
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
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';  

  constructor(private http : HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

    model = new Login();

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {
       //this.addUserPassword();
       this.submitted = true;

       // stop here if form is invalid
       //if (this.loginForm.invalid) {
       //  alert(this.loginForm.invalid);
       //    return;
       //}

       this.loading = true;
       this.authenticationService.login(this.model)
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

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          Password: ['', Validators.required]
        });
        
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

}
