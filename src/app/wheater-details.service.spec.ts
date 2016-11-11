/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WheaterDetailsService } from './wheater-details.service';

describe('Service: WheaterDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheaterDetailsService]
    });
  });

  it('should ...', inject([WheaterDetailsService], (service: WheaterDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
