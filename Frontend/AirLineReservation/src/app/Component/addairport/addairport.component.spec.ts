import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AddairportComponent } from './addairport.component';

fdescribe('AddairportComponent', () => {
  let component: AddairportComponent;
  let fixture: ComponentFixture<AddairportComponent>;
  let loc: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddairportComponent ],
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
    fixture = TestBed.createComponent(AddairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check f is exist', () => {
    expect(component.f).toEqual(component.addAirportForm.controls);
  });

  
  it('should check onSubmit function is exist', () => {
    expect(component.onSubmit()).toBeUndefined();
  });


  it('should check save function is exist', () => {
    expect(component.save()).toBeUndefined();

    
  })


});
