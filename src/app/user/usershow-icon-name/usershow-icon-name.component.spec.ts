import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowIconNameComponent } from './usershow-icon-name.component';

describe('UsershowIconNameComponent', () => {
  let component: UsershowIconNameComponent;
  let fixture: ComponentFixture<UsershowIconNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershowIconNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowIconNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
