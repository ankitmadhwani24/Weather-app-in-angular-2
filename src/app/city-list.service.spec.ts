/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityListService } from './city-list.service';

describe('Service: CityList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityListService]
    });
  });

  it('should ...', inject([CityListService], (service: CityListService) => {
    expect(service).toBeTruthy();
  }));
});
