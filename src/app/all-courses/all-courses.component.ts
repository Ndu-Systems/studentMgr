import { Component, OnInit } from "@angular/core";
import { SelectService } from "../shared/select.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-courses",
  templateUrl: "./all-courses.component.html",
  styleUrls: ["./all-courses.component.css"]
})
export class AllCoursesComponent implements OnInit {
  constructor(private selectService: SelectService, private router:Router) {}
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
    this.router.navigate(['/course', course.id]);

  }
}
