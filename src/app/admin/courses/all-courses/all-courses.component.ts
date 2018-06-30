import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseDetailsService } from "../../course-details/course-details.service";
import { SelectService } from "../../../shared/select.service";

@Component({
  selector: "app-all-courses",
  templateUrl: "./all-courses.component.html",
  styleUrls: ["./all-courses.component.css"]
})
export class AllCoursesComponent implements OnInit {
  courses$: Observable< any[]>;

  constructor(private selectService: SelectService, private router:Router, private courseDetailsService:CourseDetailsService) {
  this.courses$  = this.selectService.select("course");
  }
  ngOnInit() {
  }
  Details(course) {
    this.courseDetailsService.saveCourse(course);

  this.router.navigate(['/course', course.id]);

  }
}
