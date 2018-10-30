import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotExists404Component } from './not-exists404.component';

describe('NotExists404Component', () => {
  let component: NotExists404Component;
  let fixture: ComponentFixture<NotExists404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotExists404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotExists404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
