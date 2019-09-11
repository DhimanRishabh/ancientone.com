import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersForMobileComponent } from './filters-for-mobile.component';

describe('FiltersForMobileComponent', () => {
  let component: FiltersForMobileComponent;
  let fixture: ComponentFixture<FiltersForMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersForMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
