import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSalesmansComponent } from './all-salesmans.component';

describe('AllSalesmansComponent', () => {
  let component: AllSalesmansComponent;
  let fixture: ComponentFixture<AllSalesmansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSalesmansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSalesmansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
