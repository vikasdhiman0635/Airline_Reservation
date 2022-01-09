import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { BookingDetailsComponent } from './booking-details.component';

describe('BookingDetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDetailsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('sholud check all veriables is undefine', () => {
    expect(component.bookid).toBeUndefined();
    expect(component.bookTicket).toBeUndefined();
    expect(component.flightDetails).toBeUndefined();
    expect(component.check).toEqual(false);
  })

  it('should check app-nav component in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-all-nav')).toBeTruthy();
  });

  it('should check app-footer component in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('sholud check container is exist', () =>{
    expect(fixture.debugElement.nativeElement.querySelectorAll('.container')).toBeTruthy();
  });

  it('cholud check heading in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toContain('Ticket Details');
  });

  it('sholud check getFlightDetails function', () => {
    expect(component.print()).toBeUndefined();
  });

});
