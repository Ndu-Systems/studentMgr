import { Component, OnInit } from '@angular/core';
import { SelectService } from '../shared/select.service';
import { Router } from '@angular/router';
import { CourseDetailsService } from '../course-details/course-details.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any[];
  constructor(private selectService: SelectService, private router:Router, private courseDetailsService:CourseDetailsService) {}
  ngOnInit() {
    this.getDepartments();
  }
  getDepartments() {
    this.selectService.select("user WHERE role = 'student'").subscribe(response => {
      this.students = response;
    });
  }
  Details(course) {
    this.courseDetailsService.saveCourse(course);

  this.router.navigate(['/course', course.id]);

  }
}
