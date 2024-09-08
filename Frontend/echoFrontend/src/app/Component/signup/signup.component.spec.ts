import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test input field in form', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(5);
  });

  
  it('it sholud check input field values', () => {
    const signupForm = component.signupForm;
    const signupFormValues = {
      firstname: '',
      lastname: '',
      email: '',
      mobileno:'',
      password:''
    };
    expect(signupForm.value).toEqual(signupFormValues);
  });

  it('should check save method', () => {
    expect(component.save()).toBeUndefined();
  });

});
