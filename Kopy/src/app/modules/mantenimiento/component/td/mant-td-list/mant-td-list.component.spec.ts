import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTdListComponent } from './mant-td-list.component';

describe('MantTdListComponent', () => {
  let component: MantTdListComponent;
  let fixture: ComponentFixture<MantTdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantTdListComponent]
    });
    fixture = TestBed.createComponent(MantTdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
