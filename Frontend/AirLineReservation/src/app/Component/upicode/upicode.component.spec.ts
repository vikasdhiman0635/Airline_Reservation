import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpicodeComponent } from './upicode.component';

describe('UpicodeComponent', () => {
  let component: UpicodeComponent;
  let fixture: ComponentFixture<UpicodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpicodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
