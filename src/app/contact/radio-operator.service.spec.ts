import { TestBed } from '@angular/core/testing';

import { RadioOperatorService } from './radio-operator.service';

describe('RadioOperatorService', () => {
  let service: RadioOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
