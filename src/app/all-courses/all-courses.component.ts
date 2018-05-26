import { Component, OnInit } from "@angular/core";
import { SelectService } from "../shared/select.service";
import { Router } from "@angular/router";
import { CourseDetailsService } from "../course-details/course-details.service";

@Component({
  selector: "app-all-courses",
  templateUrl: "./all-courses.component.html",
  styleUrls: ["./all-courses.component.css"]
})
export class AllCoursesComponent implements OnInit {
  constructor(private selectService: SelectService, private router:Router, private courseDetailsService:CourseDetailsService) {}
  courses: any[];
  ngOnInit() {
    this.getDepartments();
  }
  getDepartments() {
    this.selectService.select("course").subscribe(response => {
      this.courses = response;
    });
  }
  Details(course) {
    this.courseDetailsService.saveCourse(course);

  this.router.navigate(['/course', course.id]);

  }
}
