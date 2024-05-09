import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantMpListComponent } from './mant-mp-list.component';

describe('MantMpListComponent', () => {
  let component: MantMpListComponent;
  let fixture: ComponentFixture<MantMpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantMpListComponent]
    });
    fixture = TestBed.createComponent(MantMpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
