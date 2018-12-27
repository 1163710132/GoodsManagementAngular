import { TestBed, inject } from '@angular/core/testing';

import { AffairService } from './affair.service';

describe('AffairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffairService]
    });
  });

  it('should be created', inject([AffairService], (service: AffairService) => {
    expect(service).toBeTruthy();
  }));
});
