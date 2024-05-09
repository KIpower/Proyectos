import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEmpresaRegisterComponent } from './mant-empresas-register.component';

describe('MantEmpresasRegisterComponent', () => {
  let component: MantEmpresaRegisterComponent;
  let fixture: ComponentFixture<MantEmpresaRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantEmpresaRegisterComponent]
    });
    fixture = TestBed.createComponent(MantEmpresaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
