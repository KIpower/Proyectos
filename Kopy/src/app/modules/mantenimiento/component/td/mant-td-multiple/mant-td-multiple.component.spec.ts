import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTdMultipleComponent } from './mant-td-multiple.component';

describe('MantTdMultipleComponent', () => {
  let component: MantTdMultipleComponent;
  let fixture: ComponentFixture<MantTdMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantTdMultipleComponent]
    });
    fixture = TestBed.createComponent(MantTdMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
