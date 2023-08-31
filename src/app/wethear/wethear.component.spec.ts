import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WethearComponent } from './wethear.component';

describe('WethearComponent', () => {
  let component: WethearComponent;
  let fixture: ComponentFixture<WethearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WethearComponent]
    });
    fixture = TestBed.createComponent(WethearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
