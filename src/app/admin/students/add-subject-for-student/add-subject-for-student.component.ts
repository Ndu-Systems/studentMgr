import { Observable } from "rxjs/observable";
import { AddSubjectForStudentService } from "./add-subject-for-student.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SelectService } from "../../../shared/select.service";
import { CourseDetailsService } from "../../course-details/course-details.service";
import { LoadScreen, StopLoadingScreen } from "../../../shared/loading/load";
import { StudentService } from "../student-list/student.service";

@Component({
  selector: "app-add-subject-for-student",
  templateUrl: "./add-subject-for-student.component.html",
  styleUrls: ["./add-subject-for-student.component.css"]
})
export class AddSubjectForStudentComponent implements OnInit {
  studentID: number;
  Allsubjects: any[];
  courseId: number;
  courseSubjects: any[];

  Allsubjects$:Observable<any[]>;
  courseSubjects$: Observable<any[]>;
  student$: Observable<any>;
  courseObject$: Observable<any>;
  constructor(
    private studentService: StudentService,
    private addSubjectForStudentService: AddSubjectForStudentService,
    private selectService: SelectService,
    private courseDetailsService: CourseDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.studentID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.student$ = this.studentService.getStudentCourse(this.studentID);
    this.student$.subscribe(data => {
      this.courseId = data[0].courseID;
      this.getCourse();
      this.getCourseSubjects();
      this.getAllSubjects();
    });
  }
  getCourse() {
    this.courseObject$ = this.selectService.select(
      `course WHERE id = ${this.courseId}`
    );
  }
  getCourseSubjects() {
    this.courseSubjects$ = this.courseDetailsService.select(this.courseId);
    this.courseSubjects$.subscribe(data => {
      this.courseSubjects = data;
    });
  }
  getAllSubjects() {
    this.Allsubjects$ = this.selectService.select("subject");
    this.Allsubjects$.subscribe(data => {
      this.Allsubjects = data;
    });
  }
  AddSubject(sub,courseSubjects) {
    debugger;
    let check = this.courseSubjects.filter(x => x.SubjectID == sub);
    if (check.length > 0) {
      return false;
    }
    let subject = this.Allsubjects.filter(x => x.id == sub);
    subject[0].SubjectID = subject[0].id
    courseSubjects.push(subject[0]);
  }
  Remove(subject,courseSubjects) {
    if(courseSubjects.length==1){
      return false;
    }
    var index = courseSubjects.indexOf(subject, 0);
    if (index > -1) {
      courseSubjects.splice(index, 1);
    }
  }
  SaveAll(courseSubjects) {
    var result = confirm("Are you sure you want to save these subjects?");
    if (result) {
      let data = {
        studentId: this.studentID,
        courseId: this.courseId,
        subjects: courseSubjects
      };
      LoadScreen();
      this.addSubjectForStudentService.add(data).subscribe(response => {
        StopLoadingScreen();
        alert("Student Enrollment successful!");
        this.router.navigate(["/student-list"]);
      });
    }
  }
}
