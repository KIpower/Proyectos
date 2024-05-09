import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCategoriasMultipleComponent } from './mant-categorias-multiple.component';

describe('MantCategoriasMultipleComponent', () => {
  let component: MantCategoriasMultipleComponent;
  let fixture: ComponentFixture<MantCategoriasMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCategoriasMultipleComponent]
    });
    fixture = TestBed.createComponent(MantCategoriasMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
