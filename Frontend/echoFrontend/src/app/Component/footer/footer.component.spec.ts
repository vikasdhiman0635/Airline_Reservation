import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check veriables is null', () => {
    expect(component.subscribe).toBeUndefined();
  });

  it('should check footer tag in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('footer')).toBeTruthy();
  });

  it('Test input field in DOM', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('footer');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(2);
  });

  it('should check heading in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toContain("Echo Flights");
  });

  it('should check paragram in html', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.content').textContent).toContain("Echo Flights is not only the most efficient low fare operator domestically but is also comparable with global low cost airlines.");
  });


});
