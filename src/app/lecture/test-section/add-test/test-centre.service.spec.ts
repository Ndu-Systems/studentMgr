/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestCentreService } from './test-centre.service';

describe('Service: TestCentre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCentreService]
    });
  });

  it('should ...', inject([TestCentreService], (service: TestCentreService) => {
    expect(service).toBeTruthy();
  }));
});
