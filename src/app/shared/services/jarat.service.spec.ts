import { TestBed } from '@angular/core/testing';

import { JaratService } from './jarat.service';

describe('JaratService', () => {
  let service: JaratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
