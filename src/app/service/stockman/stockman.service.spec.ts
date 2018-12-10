import { TestBed, inject } from '@angular/core/testing';

import { StockmanService } from './stockman.service';

describe('StockmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockmanService]
    });
  });

  it('should be created', inject([StockmanService], (service: StockmanService) => {
    expect(service).toBeTruthy();
  }));
});
