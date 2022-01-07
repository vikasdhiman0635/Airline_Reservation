import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPassengerComponent } from './Component/add-passenger/add-passenger.component';
import { AddairportComponent } from './Component/addairport/addairport.component';
import { AddflightComponent } from './Component/addflight/addflight.component';
import { AddflightcompanyComponent } from './Component/addflightcompany/addflightcompany.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AllflightsComponent } from './Component/allflights/allflights.component';
import { BookTocketComponent } from './Component/book-tocket/book-tocket.component';
import { BookingDetailsComponent } from './Component/booking-details/booking-details.component';
import { CardCodeComponent } from './Component/card-code/card-code.component';
import { EditprofileComponent } from './Component/editprofile/editprofile.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NewpasswordComponent } from './Component/newpassword/newpassword.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { SelectSeatComponentComponent } from './Component/select-seat-component/select-seat-component.component';
import { ShowAllFlightsComponent } from './Component/show-all-flights/show-all-flights.component';
import { SignupComponent } from './Component/signup/signup.component';
import { TeamComponent } from './Component/team/team.component';
import { UpdateairportComponent } from './Component/updateairport/updateairport.component';
import { UpdateflightComponent } from './Component/updateflight/updateflight.component';
import { UpdatepasswordComponent } from './Component/updatepassword/updatepassword.component';
import { UpicodeComponent } from './Component/upicode/upicode.component';
import { UserTransitionComponent } from './Component/user-transition/user-transition.component';
import { VerifyComponent } from './Component/verify/verify.component';
import { VerifyphonenoComponent } from './Component/verifyphoneno/verifyphoneno.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'transition', component: UserTransitionComponent
  },
  {
    path: 'searchflight', component: ShowAllFlightsComponent
  },
  {
    path: 'selectseat/:flightid', component: SelectSeatComponentComponent
  },
  {
    path: 'addpassanger/:flightid', component: AddPassengerComponent
  },
  {
    path: 'verifyTicket', component: VerifyComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'upiOTP/:upiid', component: UpicodeComponent
  },
  {
    path: 'cardcorder', component: CardCodeComponent
  },
  {
    path: 'bookTicket/:bookid', component: BookTocketComponent
  },
  {
    path: 'bookdetails/:bookid', component: BookingDetailsComponent
  },
  // {
  //   path:'mytrips', component:MyTripsComponent
  // },
  // {component:ContactComponent,path:'contact'},
  { component: LoginComponent, path: 'login' },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'team', component: TeamComponent
  },
  // { 
  //   path: 'addadmin',component: AddadminComponent 
  // },
  {
    path: 'addairport', component: AddairportComponent
  },
  {
    path: 'addflight', component: AddflightComponent
  },
  {
    path: 'addflightcompany', component: AddflightcompanyComponent
  },
  {
    path: 'reset', component: UpdatepasswordComponent
  },
  {
    path: 'verifyphoneno', component: VerifyphonenoComponent
  },
  {
    path: 'newpassword', component: NewpasswordComponent
  },
  {
    path: 'allflights', component: AllflightsComponent
  },
  {
    path: 'editflight/:flightid', component: UpdateflightComponent
  },
  {
    path: 'edit', component: EditprofileComponent
  },
  {
    path: 'editairport/:airportid', component: UpdateairportComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
