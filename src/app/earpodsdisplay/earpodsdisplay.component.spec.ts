import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarpodsdisplayComponent } from './earpodsdisplay.component';

describe('EarpodsdisplayComponent', () => {
  let component: EarpodsdisplayComponent;
  let fixture: ComponentFixture<EarpodsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarpodsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarpodsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
