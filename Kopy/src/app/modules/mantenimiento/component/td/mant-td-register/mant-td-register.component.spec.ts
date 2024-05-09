import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTdRegisterComponent } from './mant-td-register.component';

describe('MantTdRegisterComponent', () => {
  let component: MantTdRegisterComponent;
  let fixture: ComponentFixture<MantTdRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantTdRegisterComponent]
    });
    fixture = TestBed.createComponent(MantTdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
