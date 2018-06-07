/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddLectureComponent } from './add-lecture.component';

describe('AddLectureComponent', () => {
  let component: AddLectureComponent;
  let fixture: ComponentFixture<AddLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
