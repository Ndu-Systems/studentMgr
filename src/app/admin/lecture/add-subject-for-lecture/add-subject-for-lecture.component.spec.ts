/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddSubjectForLectureComponent } from './add-subject-for-lecture.component';

describe('AddSubjectForLectureComponent', () => {
  let component: AddSubjectForLectureComponent;
  let fixture: ComponentFixture<AddSubjectForLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectForLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectForLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
