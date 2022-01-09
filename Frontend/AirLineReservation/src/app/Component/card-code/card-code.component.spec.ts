import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Book } from 'src/app/Class/book';

import { CardCodeComponent } from './card-code.component';

describe('CardCodeComponent', () => {
  let component: CardCodeComponent;
  let fixture: ComponentFixture<CardCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCodeComponent ],
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
    fixture = TestBed.createComponent(CardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check Heading in HTML ', () => {
    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Enter OTP');
  })

  it('sholud check input field in html', () =>
  {
    const formElement = fixture.debugElement.nativeElement.querySelector('.container');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(2);
  });


  it('sholud check all variable is undefine', () => {
    expect(component.code).toBeUndefined();
    expect(component.bookDetails).toBeNull();
    expect(component.bookForm).toBeNull();
    expect(component.billdetails).toBeNull();
    expect(component.billForm).toBeNull();
    expect(component.cardDetails).toBeNull();
    expect(component.cardForm).toBeNull()
    expect(component.book).toEqual(new Book());
  });

});
