import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavComponent } from './Component/nav/nav.component';
import { ShowAllFlightsComponent } from './Component/show-all-flights/show-all-flights.component';
import { ShortPipe } from './Pipe/short.pipe';
import { SelectSeatComponentComponent } from './Component/select-seat-component/select-seat-component.component';
import { AddPassengerComponent } from './Component/add-passenger/add-passenger.component';
import { VerifyComponent } from './Component/verify/verify.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { UpicodeComponent } from './Component/upicode/upicode.component';
import { CardCodeComponent } from './Component/card-code/card-code.component';
import { BookTocketComponent } from './Component/book-tocket/book-tocket.component';
import { LoginComponent } from './Component/login/login.component';
import { DashbordComponent } from './Component/dashbord/dashbord.component';
import { UserTransitionComponent } from './Component/user-transition/user-transition.component';
import { BookingDetailsComponent } from './Component/booking-details/booking-details.component';
import { AddairportComponent } from './Component/addairport/addairport.component';
import { AddflightComponent } from './Component/addflight/addflight.component';
import { AddflightcompanyComponent } from './Component/addflightcompany/addflightcompany.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AllairportsComponent } from './Component/allairports/allairports.component';
import { AllflightsComponent } from './Component/allflights/allflights.component';
import { AllusersComponent } from './Component/allusers/allusers.component';
import { EditprofileComponent } from './Component/editprofile/editprofile.component';
import { NewpasswordComponent } from './Component/newpassword/newpassword.component';
import { SignupComponent } from './Component/signup/signup.component';
import { TeamComponent } from './Component/team/team.component';
import { UpdateairportComponent } from './Component/updateairport/updateairport.component';
import { UpdateflightComponent } from './Component/updateflight/updateflight.component';
import { UpdatepasswordComponent } from './Component/updatepassword/updatepassword.component';
import { VerifyphonenoComponent } from './Component/verifyphoneno/verifyphoneno.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { AllNavComponent } from './Component/all-nav/all-nav.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
