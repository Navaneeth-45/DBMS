import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesdisplayComponent } from './mobilesdisplay.component';

describe('MobilesdisplayComponent', () => {
  let component: MobilesdisplayComponent;
  let fixture: ComponentFixture<MobilesdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
