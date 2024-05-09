import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCpRegisterComponent } from './mant-cp-register.component';

describe('MantCpRegisterComponent', () => {
  let component: MantCpRegisterComponent;
  let fixture: ComponentFixture<MantCpRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCpRegisterComponent]
    });
    fixture = TestBed.createComponent(MantCpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
