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

 
  lectures:any[];
  constructor(private selectService: SelectService, private router:Router, private lectureService:LectureService) {}
  ngOnInit() {
    this.getLectures();
  }
  getLectures() {
    this.selectService.select("user WHERE role = 'lecture'").subscribe(response => {
      this.lectures = response;
      console.log("this.lectures",this.lectures)
    });
  }
  Details(lecture) {
  this.lectureService.saveLecture(lecture);
  this.router.navigate(['/lecture-course-subject', lecture.id]);

  }
}
