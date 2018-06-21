import { SelectService } from "./../../../shared/select.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LectureService } from "../../../admin/lecture/lecture.service";
import { UserDataService } from "../../../shared/services/user-data.service";
import { TestCentreService } from "../add-test/test-centre.service";

@Component({
  selector: "app-edit-test",
  templateUrl: "./edit-test.component.html",
  styleUrls: ["./edit-test.component.css"]
})
export class EditTestComponent implements OnInit {
  error: string;
  user: any;
  score: any;
  tittle: any;
  status: any;
  time: string;
  location: any;
  duration: any;
  date: any;
  type: any;
  testID: number;
  test: any;
  to:string;
  from:string;

  types: string[] = ["Test", "Examination", "Assignment", "Supp Examination"];
  times: string[] = ["8:00", "9:00", "10:00", "11:00"];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private selectService: SelectService,
    private lectureService:LectureService,
    private userDataService: UserDataService,
    private testCentreService: TestCentreService,

  ) {}
  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (this.user == null) {
      this.router.navigate(["/home"]);
    }
    this.testID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.selectService.select(`test where id = ${this.testID}`).subscribe(r => {
      if (r) {
        this.test = r[0];

        this.type= this.test.type;
        this.date= this.test.date;
        this.duration= this.test.duration;
        this.location= this.test.location;
        this.time= this.test.time;
        this.status= this.test.status;
        this.tittle= this.test.tittle;
        this.score= this.test.score;

        //
        debugger
        this.from = this.time.split("to")[0].trim();
        this.to = this.time.split("to")[1].trim();
      }
    });
  }

Edit(){
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
 
    let data = {
      type: this.type,
      date: this.date,
      duration: this.duration,
      location: this.location,
      time: `${this.from} to ${this.to}`,
      status: this.status,
      tittle: this.tittle,
      score: this.score,
      id: this.testID,
    };
    this.testCentreService.UpdateTest(data).subscribe(r => {
     if(r){
       alert(r);
       this.router.navigate(['/test-centre']);
     }
    });
}
}
