import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransitionComponent } from './user-transition.component';

describe('UserTransitionComponent', () => {
  let component: UserTransitionComponent;
  let fixture: ComponentFixture<UserTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTransitionComponent ]
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
});
