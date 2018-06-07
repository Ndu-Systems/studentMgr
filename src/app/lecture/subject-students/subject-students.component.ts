import { SubjectStudentsService } from './subject-students.service';
import { Component, OnInit } from '@angular/core';
import { LectureService } from '../../admin/lecture/lecture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';
import { LectureSubjectsService } from '../lecture-subjects/lecture-subjects.service';

@Component({
  selector: 'app-subject-students',
  templateUrl: './subject-students.component.html',
  styleUrls: ['./subject-students.component.css']
})
export class SubjectStudentsComponent implements OnInit {
  lecture: any;
  students : any[];
  subjectID: any;
  subjectObject: any;
  constructor(
    private lectureService: LectureService
    ,private router: Router
    ,private route: ActivatedRoute
    ,private selectService: SelectService
    ,private userService: UserDataService
    ,private lectureSubjectService: LectureSubjectsService
    ,private subjectStudentsService: SubjectStudentsService
    ) { }

  ngOnInit() {
    this.students = [];
    this.subjectID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.lecture = this.userService.getUser();
    this.userService.saveUser(this.lecture);
    this.subjectObject = this.lectureSubjectService.getSubject();
    //return all students enrolled in subject
    this.getStudents(this.subjectID);
  }

  getStudents(subjectID: number){
    this.subjectStudentsService.getStudents(subjectID).subscribe(response=>{
        this.students = response;
    });
  }
}
