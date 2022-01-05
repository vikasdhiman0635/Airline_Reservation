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
