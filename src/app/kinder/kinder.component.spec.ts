import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { kinderComponent } from './kinder.component';

describe('kinderComponent', () => {
  let component: kinderComponent;
  let fixture: ComponentFixture<kinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ kinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(kinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
