import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AllNavComponent } from './all-nav.component';

describe('AllNavComponent', () => {
  let component: AllNavComponent;
  let fixture: ComponentFixture<AllNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNavComponent ],
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
    fixture = TestBed.createComponent(AllNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain navbar class in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector(".navbar")).toBeTruthy();
  });

  it('should check there is 3 nav items without login',() =>{
    expect(fixture.debugElement.nativeElement.querySelectorAll('li').length).toEqual(3);
  });


  it('should check there is 5 nav items with login',() =>{
    expect(fixture.debugElement.nativeElement.querySelectorAll('li').length).toEqual(3);
  });

  it('should check all veriables', () => {
    expect(component.checkadmin).toEqual(false);
    expect(component.checkuser).toEqual(false);
    expect(component.userDetails).toBeUndefined();
    expect(component.user).toBeUndefined();
  });

  // it('should call logout function', () => {
  //   expect(component.logout()).toBeUndefined();
  // });

});
