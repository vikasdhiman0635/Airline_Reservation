import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCodeComponent } from './card-code.component';

describe('CardCodeComponent', () => {
  let component: CardCodeComponent;
  let fixture: ComponentFixture<CardCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCodeComponent ]
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
});
