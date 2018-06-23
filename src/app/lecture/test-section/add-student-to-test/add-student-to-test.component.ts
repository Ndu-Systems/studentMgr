import { SelectService } from "./../../../shared/select.service";
import { Component, OnInit } from "@angular/core";
import { TestCentreService } from "../add-test/test-centre.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-student-to-test",
  templateUrl: "./add-student-to-test.component.html",
  styleUrls: ["./add-student-to-test.component.css"]
})
export class AddStudentToTestComponent implements OnInit {
  constructor(
    private testCentreService: TestCentreService,
    private selectService: SelectService,
    private router: Router
  ) {}
  students: any[];
  allStudents: any[];
  test: any;
  ngOnInit() {
    this.test = this.testCentreService.getTest();
    this.getStudents();
    this.getAllStudents();
  }
  getStudents() {
    this.testCentreService.getStudents(this.test.subjectID).subscribe(r => {
      this.students = r;
    });
  }

  getAllStudents() {
    this.selectService
      .select("user where role = 'student'")
      .subscribe(response => {
        this.allStudents = response;
      });
  }

  AddStudent(sub) {
    let check = this.students.filter(x => x.id == sub);
    if (check.length > 0) {
      return false;
    }
    let subject = this.allStudents.filter(x => x.id == sub);
    this.students.push(subject[0]);
  }
  Remove(subject) {
    var index = this.students.indexOf(subject, 0);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }
  SaveAll() {
    var result = confirm("Are you sure you want to save these subjects?");
    if (result) {
      let data = {
        studentIDs: this.students,
        testID: this.test.id
      };
      this.testCentreService.addStudentsToTest(data).subscribe(response => {
        alert("Student added");
        this.router.navigate(["/test-centre"]);
      });
    }
  }
}
