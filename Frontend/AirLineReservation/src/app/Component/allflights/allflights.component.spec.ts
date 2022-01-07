import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflightsComponent } from './allflights.component';

describe('AllflightsComponent', () => {
  let component: AllflightsComponent;
  let fixture: ComponentFixture<AllflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
