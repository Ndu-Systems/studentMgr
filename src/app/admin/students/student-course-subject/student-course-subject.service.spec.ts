/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentCourseSubjectService } from './student-course-subject.service';

describe('Service: StudentCourseSubject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCourseSubjectService]
    });
  });

  it('should ...', inject([StudentCourseSubjectService], (service: StudentCourseSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
