import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProductosListComponent } from './mant-productos-list.component';

describe('MantProductosListComponent', () => {
  let component: MantProductosListComponent;
  let fixture: ComponentFixture<MantProductosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantProductosListComponent]
    });
    fixture = TestBed.createComponent(MantProductosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
