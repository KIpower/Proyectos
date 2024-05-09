import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEpRegisterComponent } from './mant-ep-register.component';

describe('MantEpRegisterComponent', () => {
  let component: MantEpRegisterComponent;
  let fixture: ComponentFixture<MantEpRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantEpRegisterComponent]
    });
    fixture = TestBed.createComponent(MantEpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
