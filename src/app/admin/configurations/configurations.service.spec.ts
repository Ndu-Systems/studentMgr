/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigurationsService } from './configurations.service';

describe('Service: Configurations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationsService]
    });
  });

  it('should ...', inject([ConfigurationsService], (service: ConfigurationsService) => {
    expect(service).toBeTruthy();
  }));
});
