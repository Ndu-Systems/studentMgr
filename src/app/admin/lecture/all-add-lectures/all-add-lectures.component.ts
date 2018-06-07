import { LectureService } from './../lecture.service';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-add-lectures',
  templateUrl: './all-add-lectures.component.html',
  styleUrls: ['./all-add-lectures.component.css']
})
export class AllAddLecturesComponent implements OnInit {

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
