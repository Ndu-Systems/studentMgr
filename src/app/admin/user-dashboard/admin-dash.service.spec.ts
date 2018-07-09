/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminDashService } from './admin-dash.service';

describe('Service: AdminDash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDashService]
    });
  });

  it('should ...', inject([AdminDashService], (service: AdminDashService) => {
    expect(service).toBeTruthy();
  }));
});
