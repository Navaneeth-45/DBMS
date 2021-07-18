import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesdetailsComponent } from './watchesdetails.component';

describe('WatchesdetailsComponent', () => {
  let component: WatchesdetailsComponent;
  let fixture: ComponentFixture<WatchesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
