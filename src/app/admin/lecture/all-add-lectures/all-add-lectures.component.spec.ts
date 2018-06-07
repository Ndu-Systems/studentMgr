/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllAddLecturesComponent } from './all-add-lectures.component';

describe('AllAddLecturesComponent', () => {
  let component: AllAddLecturesComponent;
  let fixture: ComponentFixture<AllAddLecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAddLecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAddLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
