import { TestBed } from '@angular/core/testing';

import { UserstoryService } from './userstory.service';

describe('UserstoryService', () => {
  let service: UserstoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserstoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
