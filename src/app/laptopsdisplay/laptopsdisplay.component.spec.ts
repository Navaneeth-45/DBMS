import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsdisplayComponent } from './laptopsdisplay.component';

describe('LaptopsdisplayComponent', () => {
  let component: LaptopsdisplayComponent;
  let fixture: ComponentFixture<LaptopsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
