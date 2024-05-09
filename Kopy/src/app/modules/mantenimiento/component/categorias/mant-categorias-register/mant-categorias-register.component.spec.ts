import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCategoriasRegisterComponent } from './mant-categorias-register.component';

describe('MantCategoriasRegisterComponent', () => {
  let component: MantCategoriasRegisterComponent;
  let fixture: ComponentFixture<MantCategoriasRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCategoriasRegisterComponent]
    });
    fixture = TestBed.createComponent(MantCategoriasRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
