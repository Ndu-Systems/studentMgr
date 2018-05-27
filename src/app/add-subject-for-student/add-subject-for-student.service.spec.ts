/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddSubjectForStudentService } from './add-subject-for-student.service';

describe('Service: AddSubjectForStudent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSubjectForStudentService]
    });
  });

  it('should ...', inject([AddSubjectForStudentService], (service: AddSubjectForStudentService) => {
    expect(service).toBeTruthy();
  }));
});
