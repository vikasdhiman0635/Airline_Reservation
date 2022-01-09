import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { UserTransitionComponent } from './user-transition.component';

describe('UserTransitionComponent', () => {
  let component: UserTransitionComponent;
  let fixture: ComponentFixture<UserTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTransitionComponent],
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
    fixture = TestBed.createComponent(UserTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sholud check all veriables', () => {
    expect(component.email).toBeNull();
  });

});
