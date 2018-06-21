import { UserDataService } from './../../shared/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../shared/select.service';
import { Router } from '@angular/router';
import { LectureService } from '../../admin/lecture/lecture.service';

@Component({
  selector: 'app-test-centre',
  templateUrl: './test-centre.component.html',
  styleUrls: ['./test-centre.component.css']
})
export class TestCentreComponent implements OnInit {

 
  allSubjects: any;
  tests:any[];
  user:any;
  constructor(private selectService: SelectService, private router:Router, private lectureService:LectureService, private userDataService:UserDataService) {}
  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (this.user == null) {
      this.router.navigate(["/home"]);
    }
    this.getTests();
    this.GetSubjects();
  }
  getTests() {
    this.selectService.select(`test WHERE lectureID = ${this.user.id}`).subscribe(response => {
      this.tests = response;
      console.log("this.tests",this.tests)
    });
  }
  Details(lecture) {
  this.lectureService.saveLecture(lecture);
  this.router.navigate(['/lecture-course-subject', lecture.id]);

  }
  GetSubjects(){
    this.selectService.select(`subject`).subscribe(r=>{
    this.allSubjects = r;
    })
  }
}
