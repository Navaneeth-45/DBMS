import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesdetailsComponent } from './headphonesdetails.component';

describe('HeadphonesdetailsComponent', () => {
  let component: HeadphonesdetailsComponent;
  let fixture: ComponentFixture<HeadphonesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
