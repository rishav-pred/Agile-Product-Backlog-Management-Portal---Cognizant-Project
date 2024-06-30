import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserstoryComponent } from './update-userstory.component';

describe('UpdateUserstoryComponent', () => {
  let component: UpdateUserstoryComponent;
  let fixture: ComponentFixture<UpdateUserstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserstoryComponent]
    });
    fixture = TestBed.createComponent(UpdateUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
