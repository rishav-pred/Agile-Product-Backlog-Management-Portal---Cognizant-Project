import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserstoryComponent } from './create-userstory.component';

describe('CreateUserstoryComponent', () => {
  let component: CreateUserstoryComponent;
  let fixture: ComponentFixture<CreateUserstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserstoryComponent]
    });
    fixture = TestBed.createComponent(CreateUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
