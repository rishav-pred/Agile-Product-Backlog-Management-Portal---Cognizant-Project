import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryComponent } from './userstory.component';

describe('UserstoryComponent', () => {
  let component: UserstoryComponent;
  let fixture: ComponentFixture<UserstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserstoryComponent]
    });
    fixture = TestBed.createComponent(UserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
