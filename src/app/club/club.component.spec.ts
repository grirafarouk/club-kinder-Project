import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { clubComponent } from './club.component';

describe('UserComponent', () => {
  let component: clubComponent;
  let fixture: ComponentFixture<clubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
