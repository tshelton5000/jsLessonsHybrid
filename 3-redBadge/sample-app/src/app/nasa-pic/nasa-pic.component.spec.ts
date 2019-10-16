import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPicComponent } from './nasa-pic.component';

describe('NasaPicComponent', () => {
  let component: NasaPicComponent;
  let fixture: ComponentFixture<NasaPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
