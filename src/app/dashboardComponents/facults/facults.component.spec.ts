import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultsComponent } from './facults.component';

describe('FacultsComponent', () => {
  let component: FacultsComponent;
  let fixture: ComponentFixture<FacultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
