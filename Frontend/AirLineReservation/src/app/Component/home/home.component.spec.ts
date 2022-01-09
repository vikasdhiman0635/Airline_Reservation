import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AirportService } from 'src/app/Service/airport.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test input field in form', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(3);
  });


  it('Test input field in form', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#div1');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(3);
  });

  
  it('it sholud check input field values', () => {
    const searchForm = component.searchForm;
    const searchFormValues = {
      from: '',
      to: '',
      fromtime: ''
    };
    expect(searchForm.value).toEqual(searchFormValues);
  });

  
  it('it sholud create a form with three controls', () => {
    expect(component.searchForm.contains('from')).toBe(true);
    expect(component.searchForm.contains('to')).toBe(true);
    expect(component.searchForm.contains('fromtime')).toBeTruthy();
  });

  it('should make the from control required', () => {
    let nameControl = component.searchForm.get('from');
    nameControl.setValue('Mumbai');
    expect(nameControl.valid).toBeTruthy();
  });

  it('should make the from control required if value is wrong', () => {
    let nameControl = component.searchForm.get('from');
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
  });


  it('should use to ', () => {
    let passwordControl = component.searchForm.get('to');
    passwordControl.setValue('Delhi');
    expect(passwordControl.valid).toBeTruthy();
  });


  it('should fromtime input type', () => {
    let emailControl = component.searchForm.get('fromtime');
    emailControl.setValue('10/02/2000');
    expect(emailControl.valid).toBeTruthy();
  });

  it('should check to contain navbar', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-nav')).toBeTruthy();
  });

  it('should check to contain Footer', () => {
    expect(fixture.debugElement.nativeElement.querySelector('app-footer')).toBeTruthy();
  });
  
});
