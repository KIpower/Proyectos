import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantRolMultipleComponent } from './mant-rol-multiple.component';

describe('MantRolMultipleComponent', () => {
  let component: MantRolMultipleComponent;
  let fixture: ComponentFixture<MantRolMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantRolMultipleComponent]
    });
    fixture = TestBed.createComponent(MantRolMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
