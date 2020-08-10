import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDetailComponent } from './secondary-detail.component';

describe('SecondaryDetailComponent', () => {
  let component: SecondaryDetailComponent;
  let fixture: ComponentFixture<SecondaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
