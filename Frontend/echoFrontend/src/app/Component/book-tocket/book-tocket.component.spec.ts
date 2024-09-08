import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { BookTocketComponent } from './book-tocket.component';

describe('BookTocketComponent', () => {
  let component: BookTocketComponent;
  let fixture: ComponentFixture<BookTocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTocketComponent ],
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
    fixture = TestBed.createComponent(BookTocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sholud check all nav bar', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-all-nav')).toBeTruthy();
  });

  it('sholud check Footer component in HTML or not', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-footer')).toBeFalsy();
  });

  it('should check all variables is null', () => {
    expect(component.seatid).toBeUndefined();
    expect(component.userDetails).toBeNull();
    expect(component.user).toBeNull();
    expect(component.bookTicket).toBeUndefined();
    expect(component.flightDetails).toBeUndefined();
    expect(component.airPortDetails).toBeUndefined();
    expect(component.checkdata).toEqual(false);
  });

  it('sholud check print function in Ts file', () => {
    expect(component.print()).toBeUndefined();
  });


});
