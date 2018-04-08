import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowNameComponent } from './usershow-name.component';

describe('UsershowNameComponent', () => {
  let component: UsershowNameComponent;
  let fixture: ComponentFixture<UsershowNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershowNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
