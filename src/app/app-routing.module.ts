import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { ProfileComponent} from "./profile/profile.component";
import { RegisterComponent} from "./register/register.component";
import {MovieNavigatorComponent} from "./movie-navigator/movie-navigator.component";
import { MovieGenreNavigatorComponent } from './moviegenre-navigator/moviegenre-navigator.component';

const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'profile/:userId', component:ProfileComponent},
{path:'register', component:RegisterComponent},
{path: 'movie', component:MovieNavigatorComponent},
{path: 'moviegenre', component:MovieGenreNavigatorComponent}
]
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

