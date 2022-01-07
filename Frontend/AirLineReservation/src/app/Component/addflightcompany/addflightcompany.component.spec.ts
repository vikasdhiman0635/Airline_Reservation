import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflightcompanyComponent } from './addflightcompany.component';

describe('AddflightcompanyComponent', () => {
  let component: AddflightcompanyComponent;
  let fixture: ComponentFixture<AddflightcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflightcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflightcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
