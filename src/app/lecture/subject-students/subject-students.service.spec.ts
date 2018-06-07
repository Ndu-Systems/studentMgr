/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectStudentsService } from './subject-students.service';

describe('Service: SubjectStudents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectStudentsService]
    });
  });

  it('should ...', inject([SubjectStudentsService], (service: SubjectStudentsService) => {
    expect(service).toBeTruthy();
  }));
});
