import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowIconComponent } from './usershow-icon.component';

describe('UsershowIconComponent', () => {
  let component: UsershowIconComponent;
  let fixture: ComponentFixture<UsershowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershowIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
