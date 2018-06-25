import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TestCentreService } from "./test-centre.service";
import { LectureService } from "../../../admin/lecture/lecture.service";
import { UserDataService } from "../../../shared/services/user-data.service";

@Component({
  selector: "app-add-test",
  templateUrl: "./add-test.component.html",
  styleUrls: ["./add-test.component.css"]
})
export class AddTestComponent implements OnInit {
  error: string;
  from: any;
  to: any;
  date: any;
  duration: any;
  location: any;
  time: any;
  status: string = "new";
  tittle: any;
  score: any;
  subjectID: string;
  type: any;
  user: any;
  message: any;
  vv;
  subjects: any[];
  types: string[] = ["Test", "Examination", "Assignment", "Supp Examination"];
  times: string[] = ["8:00", "9:00", "10:00", "11:00"];
  constructor(
    private lectureService: LectureService,
    private userDataService: UserDataService,
    private router: Router,
    private testCentreService: TestCentreService
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (this.user == null) {
      this.router.navigate(["/home"]);
    }
    this.getSubjects();
  }

  getSubjects() {
    this.lectureService.selectSubject(this.user.id).subscribe(response => {
      if (response) {
        this.subjects = response;
      } else {
        this.subjects = [];
      }
    });
  }
  AddTest() {
    this.error = "";
    if (!this.type) {
      this.error = "Please select Type";
      return false;
    }
    if (!this.date) {
      this.error = "Please select date";
      return false;
    }
    if (!this.duration) {
      this.error = "Please enter the duration";
      return false;
    }
    if (!this.location) {
      this.error = "Please enter the venue";
      return false;
    }
    if (!this.from) {
      this.error = "Please select time from";
      return false;
    }
    if (!this.to) {
      this.error = "Please select time to";
      return false;
    }
    if (!this.tittle) {
      this.error = "Please enter the description";
      return false;
    }
    if (!this.score) {
      this.error = "Please enter  the marks";
      return false;
    }
    if (!this.subjectID) {
      this.error = "Please select the subject";
      return false;
    }
    let data = {
      type: this.type,
      date: this.date,
      duration: this.duration,
      location: this.location,
      time: `${this.from} to ${this.to}`,
      status: this.status,
      tittle: this.tittle,
      score: this.score,
      subjectID: parseInt(this.subjectID),
      lectureID: parseInt(this.user.id)
    };
    this.testCentreService.AddTest(data).subscribe(r => {
      debugger;
      if (r) {
        data["id"]=r;
        this.testCentreService.saveTest(data);
        alert(
          "Test was created successfully, now you can add/remove student to write this test"
        );
        this.router.navigate(["/add-student-to-test"]);
      }
    });
  }
}
