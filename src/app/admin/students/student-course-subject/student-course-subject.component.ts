import { SelectService } from "./../../../shared/select.service";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentCourseSubjectService } from "./student-course-subject.service";
import { StudentService } from "../student-list/student.service";

@Component({
  selector: "app-student-course-subject",
  templateUrl: "./student-course-subject.component.html",
  styleUrls: ["./student-course-subject.component.css"]
})
export class StudentCourseSubjectComponent implements OnInit {
  student$: Observable<any>;
  studentID: number;
  subject: any;
  constructor(
    private studentService: StudentService,
    private selectService: SelectService,
    private studentCourseSubjectService: StudentCourseSubjectService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.studentID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getCourse(this.studentID); // all screen data
  }
  getCourse(studentId: number) {
    this.student$ = this.studentCourseSubjectService.select(studentId);
  }
  createIncome(Student, AccountTypeID) {
    localStorage.setItem("Student",JSON.stringify(Student));
    localStorage.setItem("AccountTypeID", AccountTypeID);
    this.router.navigate(['new-income']);

  }
}
