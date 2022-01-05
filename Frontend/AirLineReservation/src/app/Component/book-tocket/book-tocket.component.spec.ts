import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTocketComponent } from './book-tocket.component';

describe('BookTocketComponent', () => {
  let component: BookTocketComponent;
  let fixture: ComponentFixture<BookTocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
