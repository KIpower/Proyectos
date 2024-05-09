import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProductosRegisterComponent } from './mant-productos-register.component';

describe('MantProductosRegisterComponent', () => {
  let component: MantProductosRegisterComponent;
  let fixture: ComponentFixture<MantProductosRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantProductosRegisterComponent]
    });
    fixture = TestBed.createComponent(MantProductosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
