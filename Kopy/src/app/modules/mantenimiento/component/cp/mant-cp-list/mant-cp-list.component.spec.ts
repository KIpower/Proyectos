import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCpsListComponent } from './mant-cp-list.component';

describe('MantCpListComponent', () => {
  let component: MantCpsListComponent;
  let fixture: ComponentFixture<MantCpsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCpsListComponent]
    });
    fixture = TestBed.createComponent(MantCpsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
