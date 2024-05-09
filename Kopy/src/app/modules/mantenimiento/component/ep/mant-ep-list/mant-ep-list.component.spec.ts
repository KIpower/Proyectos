import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEpListComponent } from './mant-ep-list.component';

describe('MantEpListComponent', () => {
  let component: MantEpListComponent;
  let fixture: ComponentFixture<MantEpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantEpListComponent]
    });
    fixture = TestBed.createComponent(MantEpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
