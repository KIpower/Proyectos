import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCategoriasListComponent } from './mant-categorias-list.component';

describe('MantCategoriasListComponent', () => {
  let component: MantCategoriasListComponent;
  let fixture: ComponentFixture<MantCategoriasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCategoriasListComponent]
    });
    fixture = TestBed.createComponent(MantCategoriasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
