import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreportComponent } from './viewreport.component';

describe('ViewreportComponent', () => {
  let component: ViewreportComponent;
  let fixture: ComponentFixture<ViewreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewreportComponent]
    });
    fixture = TestBed.createComponent(ViewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
