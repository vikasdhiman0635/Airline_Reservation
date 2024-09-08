import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShortPipe } from 'src/app/Pipe/short.pipe';

import { ShowAllFlightsComponent } from './show-all-flights.component';

describe('ShowAllFlightsComponent', () => {
  let component: ShowAllFlightsComponent;
  let fixture: ComponentFixture<ShowAllFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ShowAllFlightsComponent,
        ShortPipe
      ],
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
    fixture = TestBed.createComponent(ShowAllFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sholud check Navbar is exist', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-all-nav')).toBeTruthy();
  });

  it('Test input field in DOM', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('.container');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(4);
  });


  it('sholud check Footer is exist', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('sholud check Footer is exist', () => {
    expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain("Search Flight");
  });

  it('should check varable is null or undefine',() => {
    expect(component.from).toBeUndefined();
    expect(component.to).toBeUndefined();
    expect(component.date).toBeUndefined();
    expect(component.allFlights).toBeUndefined();
    expect(component.flightDetails).toBeNull();
    expect(component.flightdetails).toBeNull();
    expect(component.email).toBeNull();
    expect(component.checkuser).toEqual(false);
    expect(component.showcheck).toEqual(false);
    expect(component.id).toEqual(0);
    expect(component.seatdata).toBeUndefined();
  });

  it('should check raset function', () => {
    expect(component.raset()).toBeUndefined();
  }); 

});
