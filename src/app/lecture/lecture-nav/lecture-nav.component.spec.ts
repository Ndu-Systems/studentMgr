/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LectureNavComponent } from './lecture-nav.component';

describe('LectureNavComponent', () => {
  let component: LectureNavComponent;
  let fixture: ComponentFixture<LectureNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
