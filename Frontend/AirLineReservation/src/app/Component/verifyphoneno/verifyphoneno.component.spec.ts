import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyphonenoComponent } from './verifyphoneno.component';

describe('VerifyphonenoComponent', () => {
  let component: VerifyphonenoComponent;
  let fixture: ComponentFixture<VerifyphonenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyphonenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyphonenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
