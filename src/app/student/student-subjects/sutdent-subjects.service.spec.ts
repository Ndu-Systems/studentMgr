/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SutdentSubjectsService } from './sutdent-subjects.service';

describe('Service: SutdentSubjects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SutdentSubjectsService]
    });
  });

  it('should ...', inject([SutdentSubjectsService], (service: SutdentSubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
