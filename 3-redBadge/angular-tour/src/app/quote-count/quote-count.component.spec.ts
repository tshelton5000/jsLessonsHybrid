import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCountComponent } from './quote-count.component';

describe('QuoteCountComponent', () => {
  let component: QuoteCountComponent;
  let fixture: ComponentFixture<QuoteCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
