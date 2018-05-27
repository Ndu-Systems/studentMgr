import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../course-details/course-details.service';

@Component({
  selector: 'app-student-course-subject',
  templateUrl: './student-course-subject.component.html',
  styleUrls: ['./student-course-subject.component.css']
})
export class StudentCourseSubjectComponent implements OnInit {
  courseObject:any;
  constructor(private courseDetailsService:CourseDetailsService) { }

  ngOnInit() {
    this.courseObject=this.courseDetailsService.getCourse();

  }

}
