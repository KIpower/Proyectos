import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantMpMultipleComponent } from './mant-mp-multiple.component';

describe('MantMpMultipleComponent', () => {
  let component: MantMpMultipleComponent;
  let fixture: ComponentFixture<MantMpMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantMpMultipleComponent]
    });
    fixture = TestBed.createComponent(MantMpMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
