/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseSubjectService } from './course-subject.service';

describe('Service: CourseSubject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseSubjectService]
    });
  });

  it('should ...', inject([CourseSubjectService], (service: CourseSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
