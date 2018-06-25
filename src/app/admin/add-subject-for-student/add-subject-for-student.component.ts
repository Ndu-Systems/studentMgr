import { AddSubjectForStudentService } from "./add-subject-for-student.service";
import { Component, OnInit } from "@angular/core";

import { CourseDetailsService } from "../course-details/course-details.service";
import { StudentService } from "../students/student-list/student.service";
import { SelectService } from "../../shared/select.service";
import { Router } from "@angular/router";
import { LoadScreen, StopLoadingScreen } from "../../shared/loading/load";

@Component({
  selector: "app-add-subject-for-student",
  templateUrl: "./add-subject-for-student.component.html",
  styleUrls: ["./add-subject-for-student.component.css"]
})
export class AddSubjectForStudentComponent implements OnInit {
  Allsubjects: any[];
  student: any;
  courseId: number;
  courseSubjects: any[];
  courseObject: any;
  constructor(
    private studentService: StudentService,
    private addSubjectForStudentService: AddSubjectForStudentService,
    private selectService: SelectService,
    private courseDetailsService: CourseDetailsService,
    private router:Router
  ) {}

  ngOnInit() {
    this.student = this.studentService.getStudent();
    console.log("this.student", this.student);
    this.courseId = this.student.courseId;
    this.getCourse();
    this.getCourseSubjects();
    this.getAllSubjects();
  }
  getCourse() {
    this.selectService
      .select(`course WHERE id = ${this.courseId}`)
      .subscribe(response => {
        this.courseObject = response[0];
        console.log(this.courseObject);
      });
  }
  getCourseSubjects() {
    this.courseDetailsService.select(this.courseId).subscribe(response => {
      this.courseSubjects = response;
    });
  }
  getAllSubjects() {
    this.selectService.select("subject").subscribe(response => {
      this.Allsubjects = response;
    });
  }
  AddSubject(sub) {
    let check = this.courseSubjects.filter(x => x.id == sub);
    if (check.length > 0) {
      return false;
    }
    let subject = this.Allsubjects.filter(x => x.id == sub);
    this.courseSubjects.push(subject[0]);
  }
  Remove(subject) {
    var index = this.courseSubjects.indexOf(subject, 0);
    if (index > -1) {
      this.courseSubjects.splice(index, 1);
    }
  }
  SaveAll() {
    var result = confirm("Are you sure you want to save these subjects?");
    if (result) {
      let data = {
        studentId: this.student.studentId,
        courseId: this.courseId,
        subjects: this.courseSubjects
      };
      LoadScreen();
      this.addSubjectForStudentService.add(data).subscribe(response => {
        StopLoadingScreen();
        alert("Student Enrollment successful!")
        this.router.navigate(['/student-list']);

      });
    }
  }
}
