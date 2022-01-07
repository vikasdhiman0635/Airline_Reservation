import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllairportsComponent } from './allairports.component';

describe('AllairportsComponent', () => {
  let component: AllairportsComponent;
  let fixture: ComponentFixture<AllairportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllairportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllairportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
