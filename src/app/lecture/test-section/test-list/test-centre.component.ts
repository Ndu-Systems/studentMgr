import { TestCentreService } from './../add-test/test-centre.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared/select.service';
import { LectureService } from '../../../admin/lecture/lecture.service';
import { UserDataService } from '../../../shared/services/user-data.service';

@Component({
  selector: 'app-test-centre',
  templateUrl: './test-centre.component.html',
  styleUrls: ['./test-centre.component.css']
})
export class TestCentreComponent implements OnInit {

 
  allSubjects: any;
  tests:any[];
  user:any;
  constructor(private selectService: SelectService, private router:Router, private testCentreService:TestCentreService, private userDataService:UserDataService) {}
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
  Edit(test) {
  this.router.navigate(['/edit-test', test.id]);

  }
  More(test) {
  this.testCentreService.saveTest(test);
  this.router.navigate(["/test-students"]);

  }
  GetSubjects(){
    this.selectService.select(`subject`).subscribe(r=>{
    this.allSubjects = r;
    })
  }
}
