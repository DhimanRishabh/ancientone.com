import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersForWebComponent } from './filters-for-web.component';

describe('FiltersForWebComponent', () => {
  let component: FiltersForWebComponent;
  let fixture: ComponentFixture<FiltersForWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersForWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersForWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
