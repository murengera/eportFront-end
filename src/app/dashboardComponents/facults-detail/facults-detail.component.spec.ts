import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultsDetailComponent } from './facults-detail.component';

describe('FacultsDetailComponent', () => {
  let component: FacultsDetailComponent;
  let fixture: ComponentFixture<FacultsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
