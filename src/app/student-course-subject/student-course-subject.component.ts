import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student.service';

@Component({
  selector: 'app-student-course-subject',
  templateUrl: './student-course-subject.component.html',
  styleUrls: ['./student-course-subject.component.css']
})
export class StudentCourseSubjectComponent implements OnInit {
  courseObject:any;
  student:any;
  constructor( private studentService:StudentService) { }

  ngOnInit() {
this.student= this.studentService.getStudent();
  }

}
