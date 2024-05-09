import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProductosMultipleComponent } from './mant-productos-multiple.component';

describe('MantProductosMultipleComponent', () => {
  let component: MantProductosMultipleComponent;
  let fixture: ComponentFixture<MantProductosMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantProductosMultipleComponent]
    });
    fixture = TestBed.createComponent(MantProductosMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
