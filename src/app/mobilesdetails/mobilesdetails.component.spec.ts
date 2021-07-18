import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesdetailsComponent } from './mobilesdetails.component';

describe('MobilesdetailsComponent', () => {
  let component: MobilesdetailsComponent;
  let fixture: ComponentFixture<MobilesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
