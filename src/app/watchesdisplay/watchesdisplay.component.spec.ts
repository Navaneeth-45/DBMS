import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesdisplayComponent } from './watchesdisplay.component';

describe('WatchesdisplayComponent', () => {
  let component: WatchesdisplayComponent;
  let fixture: ComponentFixture<WatchesdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchesdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
