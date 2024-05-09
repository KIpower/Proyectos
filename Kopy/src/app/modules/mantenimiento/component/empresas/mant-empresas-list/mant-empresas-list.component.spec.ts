import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEmpresaListComponent } from './mant-empresas-list.component';

describe('MantEmpresaListComponent', () => {
  let component: MantEmpresaListComponent;
  let fixture: ComponentFixture<MantEmpresaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantEmpresaListComponent]
    });
    fixture = TestBed.createComponent(MantEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
