import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { component:HomeComponent, path:''},
  {component:MyTripsComponent,path:'mytrips'},
  {component:ContactComponent,path:'contact'},
  { component:LoginComponent, path:'login'},
  {component:SignupComponent,path:'signup'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
