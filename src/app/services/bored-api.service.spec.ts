import { TestBed } from '@angular/core/testing';

import { BoredApiService } from './bored-api.service';

describe('BoredApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoredApiService = TestBed.get(BoredApiService);
    expect(service).toBeTruthy();
  });
});
