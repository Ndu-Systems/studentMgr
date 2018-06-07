import { LectureService } from './../lecture.service';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lecture-course-subject',
  templateUrl: './lecture-course-subject.component.html',
  styleUrls: ['./lecture-course-subject.component.css']
})
export class LectureCourseSubjectComponent implements OnInit {

  courseObject:any;
  lecture:any;
  lectureID: number;
  subjects: any[];
  subject: any
  constructor( 
    private selectService: SelectService,
    private lectureService: LectureService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subjects = [];
    this.lectureID = parseInt(this.route.snapshot.paramMap.get("id"));
      
    this.lecture = this.lectureService.geLecture();
    if(!this.lecture){
        this.router.navigate(['/']);
    }
     this.getCourse(this.lectureID);
     this.getSubjects(this.lectureID);
  }
  getCourse(lectureID: number){   
    this.lectureService.select(lectureID).subscribe(response => {   
      debugger
        this.courseObject = response[0];   
        if(!this.courseObject){
          this.courseObject = false;
        }
    });
  }
  getSubjects(lectureID: number){    
    this.lectureService.selectSubject(lectureID).subscribe(response => {       
      this.subjects = response;      
    });
  }

}
