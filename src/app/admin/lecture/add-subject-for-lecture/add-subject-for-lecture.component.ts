import { Router } from "@angular/router";
import { LectureService } from "./../lecture.service";
import { Component, OnInit } from "@angular/core";
import { CourseDetailsService } from "../../course-details/course-details.service";
import { SelectService } from "../../../shared/select.service";
import { LoadScreen, StopLoadingScreen } from "../../../shared/loading/load";

@Component({
  selector: "app-add-subject-for-lecture",
  templateUrl: "./add-subject-for-lecture.component.html",
  styleUrls: ["./add-subject-for-lecture.component.css"]
})
export class AddSubjectForLectureComponent implements OnInit {
  Allsubjects: any[];
  lecture: any;
  courseId: number;
  courseSubjects: any[];
  courseObject: any;
  constructor(
    private lectureService: LectureService,
    private selectService: SelectService,
    private courseDetailsService: CourseDetailsService,
    private route: Router
  ) {}

  ngOnInit() {
    this.lecture = this.lectureService.geLecture();
    if (!this.lecture) {
      this.route.navigate(["/"]);
    }
    console.log("this.lecture", this.lecture);
    this.courseId = this.lecture.courseId;
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
        studentId: this.lecture.lectureId,
        courseId: this.courseId,
        subjects: this.courseSubjects
      };
      LoadScreen();
      this.lectureService.add(data).subscribe(response => {
        StopLoadingScreen();
        alert("Lecture was added successfuly");
        this.route.navigate(["all-lectures"]);
      });
    }
  }
}
