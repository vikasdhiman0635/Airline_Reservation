import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatComponentComponent } from './select-seat-component.component';

describe('SelectSeatComponentComponent', () => {
  let component: SelectSeatComponentComponent;
  let fixture: ComponentFixture<SelectSeatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSeatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSeatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
