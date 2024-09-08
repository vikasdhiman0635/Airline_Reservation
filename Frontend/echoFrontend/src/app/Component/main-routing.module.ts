import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { AddairportComponent } from './addairport/addairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AddflightcompanyComponent } from './addflightcompany/addflightcompany.component';
import { AdminComponent } from './admin/admin.component';
import { AllflightsComponent } from './allflights/allflights.component';
import { BookTocketComponent } from './book-tocket/book-tocket.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CardCodeComponent } from './card-code/card-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectSeatComponentComponent } from './select-seat-component/select-seat-component.component';
import { ShowAllFlightsComponent } from './show-all-flights/show-all-flights.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';
import { UpdateairportComponent } from './updateairport/updateairport.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpicodeComponent } from './upicode/upicode.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTransitionComponent } from './user-transition/user-transition.component';
import { VerifyComponent } from './verify/verify.component';
import { VerifyphonenoComponent } from './verifyphoneno/verifyphoneno.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
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
  {
    component: LoginComponent, path: 'login'
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'team', component: TeamComponent
  },
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
    path: 'verifyphoneno/:email', component: VerifyphonenoComponent
  },
  {
    path: 'newpassword/:email', component: NewpasswordComponent
  },
  {
    path: 'allflights', component: AllflightsComponent
  },
  {
    path: 'editflight/:flightid', component: UpdateflightComponent
  },
  {
    path: 'edit/:email', component: EditprofileComponent
  },
  {
    path: 'profile', component: UserProfileComponent
  },
  {
    path: 'editairport/:airportid', component: UpdateairportComponent
  },
  {
    path: 'cantact', component: ContactComponent
  },
  {
    path: 'changepassword', component: ChangePasswordComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
