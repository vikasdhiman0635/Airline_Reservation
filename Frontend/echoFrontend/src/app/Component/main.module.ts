import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ShowAllFlightsComponent } from './show-all-flights/show-all-flights.component';
import { ShortPipe } from '../Pipe/short.pipe';
import { SelectSeatComponentComponent } from './select-seat-component/select-seat-component.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { VerifyComponent } from './verify/verify.component';
import { PaymentComponent } from './payment/payment.component';
import { UpicodeComponent } from './upicode/upicode.component';
import { CardCodeComponent } from './card-code/card-code.component';
import { AddairportComponent } from './addairport/addairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AddflightcompanyComponent } from './addflightcompany/addflightcompany.component';
import { AdminComponent } from './admin/admin.component';
import { AllNavComponent } from './all-nav/all-nav.component';
import { AllairportsComponent } from './allairports/allairports.component';
import { AllflightsComponent } from './allflights/allflights.component';
import { AllusersComponent } from './allusers/allusers.component';
import { BookTocketComponent } from './book-tocket/book-tocket.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';
import { UpdateairportComponent } from './updateairport/updateairport.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTransitionComponent } from './user-transition/user-transition.component';
import { VerifyphonenoComponent } from './verifyphoneno/verifyphoneno.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NotfoundComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ShowAllFlightsComponent,
    ShortPipe,
    SelectSeatComponentComponent,
    AddPassengerComponent,
    VerifyComponent,
    PaymentComponent,
    UpicodeComponent,
    CardCodeComponent,
    BookTocketComponent,
    LoginComponent,
    DashbordComponent,
    UserTransitionComponent,
    BookingDetailsComponent,
    AddairportComponent,
    AddflightComponent,
    AddflightcompanyComponent,
    AdminComponent,
    AllairportsComponent,
    AllflightsComponent,
    AllusersComponent,
    EditprofileComponent,
    NewpasswordComponent,
    SignupComponent,
    TeamComponent,
    UpdateairportComponent,
    UpdateflightComponent,
    UpdatepasswordComponent,
    VerifyphonenoComponent,
    UserProfileComponent,
    AllNavComponent,
    ContactComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule
  ]
})
export class MainModule { }
