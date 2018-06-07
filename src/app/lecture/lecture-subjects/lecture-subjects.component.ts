import { LectureService } from './../../admin/lecture/lecture.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';
import { LectureSubjectsService } from './lecture-subjects.service';

@Component({
  selector: 'app-lecture-subjects',
  templateUrl: './lecture-subjects.component.html',
  styleUrls: ['./lecture-subjects.component.css']
})
export class LectureSubjectsComponent implements OnInit {
  lecture:any;
  lectureID: number;
  subjects: any[];
  constructor(
    private lectureService: LectureService
    ,private router: Router
    ,private route: ActivatedRoute
    ,private selectService: SelectService
    ,private userService: UserDataService
    ,private lectureSubjectService: LectureSubjectsService
    ) { }

  ngOnInit() {
    this.subjects = [];
    this.lectureID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.lecture = this.userService.getUser();
    this.userService.saveUser(this.lecture);
    //return subjects that belong to lecture
    this.getSubjects(this.lectureID);

  }
  getSubjects(lectureID: number){
    this.lectureService.selectSubject(lectureID).subscribe(response => {       
      this.subjects = response;      
    });
  }

  subjectStudents(subject){
    this.userService.saveUser(this.lecture);
    this.lectureSubjectService.saveSubject(subject);
    this.router.navigate(['/subject-students', subject.id]);
 
  }
}
