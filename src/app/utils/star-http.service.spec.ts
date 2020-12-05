import { TestBed } from '@angular/core/testing';

import { StarHttpService } from './star-http.service';

describe('StarHttpService', () => {
  let service: StarHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
