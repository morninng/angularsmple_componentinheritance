import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowBaseComponent } from './usershow-base.component';

describe('UsershowBaseComponent', () => {
  let component: UsershowBaseComponent;
  let fixture: ComponentFixture<UsershowBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershowBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
