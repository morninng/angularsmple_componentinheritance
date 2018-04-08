import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Extend1Component } from './extend1.component';

describe('Extend1Component', () => {
  let component: Extend1Component;
  let fixture: ComponentFixture<Extend1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Extend1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Extend1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
