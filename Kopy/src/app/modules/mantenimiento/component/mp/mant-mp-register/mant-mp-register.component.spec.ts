import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantMpRegisterComponent } from './mant-mp-register.component';

describe('MantMpRegisterComponent', () => {
  let component: MantMpRegisterComponent;
  let fixture: ComponentFixture<MantMpRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantMpRegisterComponent]
    });
    fixture = TestBed.createComponent(MantMpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
