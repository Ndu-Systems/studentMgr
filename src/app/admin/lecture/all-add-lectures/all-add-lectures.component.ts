import { Observable } from 'rxjs/Observable';
import { LectureService } from './../lecture.service';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';
import { Router } from '@angular/router';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';

@Component({
  selector: 'app-all-add-lectures',
  templateUrl: './all-add-lectures.component.html',
  styleUrls: ['./all-add-lectures.component.css']
})
export class AllAddLecturesComponent implements OnInit {

  lectures$:Observable< any[]>;
  constructor(private selectService: SelectService, private router:Router, private lectureService:LectureService) {
    this.lectures$ =this.selectService.select("user WHERE role = 'lecture'");
  }
  ngOnInit() {
  
  }
  
  Details(lecture) {
  this.lectureService.saveLecture(lecture);
  this.router.navigate(['/lecture-course-subject', lecture.id]);

  }
}
