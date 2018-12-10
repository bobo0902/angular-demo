import { TestBed } from '@angular/core/testing';

import { IntegratedQueryService } from './integrated-query.service';

describe('IntegratedQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegratedQueryService = TestBed.get(IntegratedQueryService);
    expect(service).toBeTruthy();
  });
});
