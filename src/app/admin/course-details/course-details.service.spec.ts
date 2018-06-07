/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseDetailsService } from './course-details.service';

describe('Service: CourseDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailsService]
    });
  });

  it('should ...', inject([CourseDetailsService], (service: CourseDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
