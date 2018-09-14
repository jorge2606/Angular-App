import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutesModule } from './app-routes.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor , ErrorInterceptor,fakeBackendProvider} from './_helpers/';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CreateuserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
