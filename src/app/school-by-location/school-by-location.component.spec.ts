import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolByLocationComponent } from './school-by-location.component';

describe('SchoolByLocationComponent', () => {
  let component: SchoolByLocationComponent;
  let fixture: ComponentFixture<SchoolByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
