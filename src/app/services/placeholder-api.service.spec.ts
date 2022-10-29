import { TestBed } from '@angular/core/testing';

import { PlaceholderApiService } from './placeholder-api.service';

describe('PlaceholderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceholderApiService = TestBed.get(PlaceholderApiService);
    expect(service).toBeTruthy();
  });
});
