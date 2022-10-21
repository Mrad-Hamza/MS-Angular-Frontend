import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesmanComponent } from './view-salesman.component';

describe('ViewSalesmanComponent', () => {
  let component: ViewSalesmanComponent;
  let fixture: ComponentFixture<ViewSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
