import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateairportComponent } from './updateairport.component';

describe('UpdateairportComponent', () => {
  let component: UpdateairportComponent;
  let fixture: ComponentFixture<UpdateairportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateairportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
