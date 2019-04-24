import { TestBed } from '@angular/core/testing';

import { GoogleApi1Service } from './google-api1.service';

describe('GoogleApi1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleApi1Service = TestBed.get(GoogleApi1Service);
    expect(service).toBeTruthy();
  });
});
