import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPassengerComponent } from './Component/add-passenger/add-passenger.component';
import { HomeComponent } from './Component/home/home.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { SelectSeatComponentComponent } from './Component/select-seat-component/select-seat-component.component';
import { ShowAllFlightsComponent } from './Component/show-all-flights/show-all-flights.component';
import { VerifyComponent } from './Component/verify/verify.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
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
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
