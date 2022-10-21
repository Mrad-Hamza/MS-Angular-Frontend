import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalesmanComponent } from './update-salesman.component';

describe('UpdateSalesmanComponent', () => {
  let component: UpdateSalesmanComponent;
  let fixture: ComponentFixture<UpdateSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSalesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
