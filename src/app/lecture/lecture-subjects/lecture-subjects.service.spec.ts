/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LectureSubjectsService } from './lecture-subjects.service';

describe('Service: LectureSubjects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LectureSubjectsService]
    });
  });

  it('should ...', inject([LectureSubjectsService], (service: LectureSubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
