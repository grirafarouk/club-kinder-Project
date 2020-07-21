import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ownerComponent } from './owner.component';

describe('ownerComponent', () => {
  let component: ownerComponent;
  let fixture: ComponentFixture<ownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
