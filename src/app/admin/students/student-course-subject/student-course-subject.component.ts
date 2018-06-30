import { SelectService } from './../../../shared/select.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCourseSubjectService } from './student-course-subject.service';
import { StudentService } from '../student-list/student.service';


@Component({
  selector: 'app-student-course-subject',
  templateUrl: './student-course-subject.component.html',
  styleUrls: ['./student-course-subject.component.css']
})
export class StudentCourseSubjectComponent implements OnInit {
  courseObject$:Observable<any>;;
  student$:Observable<any>;
  studentID: number;
  subjects$: Observable< any[]>;
  subject: any
  constructor( 
    private studentService:StudentService,
    private selectService: SelectService,
    private studentCourseSubjectService: StudentCourseSubjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.student$ = this.selectService.select(`user WHERE id = ${this.studentID}`);
    this.subjects$ = this.studentCourseSubjectService.selectSubject(this.studentID);

     this.getCourse(this.studentID);
  }
  getCourse(studentId: number){   
    this.courseObject$ = this.studentCourseSubjectService.select(studentId);
  }
 
}
