import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {routing} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {UserService} from "./services/user.service.client";
import {MovieService} from "./services/MovieService";
import { MovieNavigatorComponent } from './movie-navigator/movie-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    MovieNavigatorComponent
  ],
  imports: [
    routing,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
