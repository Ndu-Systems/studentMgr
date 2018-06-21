import { UserDataService } from './../../shared/services/user-data.service';
import { LectureService } from './../../admin/lecture/lecture.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-test",
  templateUrl: "./add-test.component.html",
  styleUrls: ["./add-test.component.css"]
})
export class AddTestComponent implements OnInit {
  date: any;
  duration: any;
  location: any;
  time: any;
  status: any;
  tittle: any;
  score: any;
  moduleID: any;
  type: any;
  user: any;
  message:any;  vv 
  subjects: any[];
  types:string[] =['Test', 'Examination','Assignment','Supp Examination'];
  times:string[] =['8:00', '9:00','10:00','11:00'];
  constructor(
    private lectureService : LectureService,
    private userDataService : UserDataService,
    private router : Router
  
  ) {}

  ngOnInit()
  {
    this.user = this.userDataService.getUser();
    if(this.user == null){
      this.router.navigate(["/home"]);
    }
    this.getSubjects();
  }

  getSubjects(){
  this.lectureService.selectSubject(4).subscribe(response=>{
    if(response){
      this.subjects = response;
    }
    else{
      this.subjects = [];
    }
  })
  }
  AddTest() {

    let data = {
      type: this.type,
      date: this.date,
      duration: this.duration,
      location: this.location,
      time: this.time,
      status: this.status,
      tittle: this.tittle,
      score: this.score,
      moduleID: this.moduleID
    };
  }
}
