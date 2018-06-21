import { SutdentSubjectsService } from './sutdent-subjects.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {

  student : any;
  subjects : any[];
  message : any;
  constructor(
    private userDataService : UserDataService,
    private router:Router,
    private studentSubjectsService: SutdentSubjectsService
  ) { }

  ngOnInit() {
    this.student = this.userDataService.getUser();
    debugger
    this.getSubjects(this.student.id);
  }

  getSubjects(studentId : any){
    debugger
    this.studentSubjectsService.selectSubject(studentId).subscribe(response =>{
      debugger
      if(response){
        this.subjects = response;
      }
      else{
        this.message = 'No Subjects Enrolled yet, Contact Registration Department'
      }  
    })
  }

  StudentSubjectMarks(subject){
    this.router.navigate(['student-subject-marks']);
  }
}
