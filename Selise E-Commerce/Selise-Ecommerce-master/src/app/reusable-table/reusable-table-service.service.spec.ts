import { TestBed } from '@angular/core/testing';

import { ReusableTableServiceService } from './reusable-table-service.service';

describe('ReusableTableServiceService', () => {
  let service: ReusableTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
