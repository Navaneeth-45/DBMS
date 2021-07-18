import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsdetailsComponent } from './laptopsdetails.component';

describe('LaptopsdetailsComponent', () => {
  let component: LaptopsdetailsComponent;
  let fixture: ComponentFixture<LaptopsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
