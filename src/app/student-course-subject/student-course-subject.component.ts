import { SelectService } from './../shared/select.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student.service';
import { ActivatedRoute } from '@angular/router';
import { StudentCourseSubjectService } from './student-course-subject.service';

@Component({
  selector: 'app-student-course-subject',
  templateUrl: './student-course-subject.component.html',
  styleUrls: ['./student-course-subject.component.css']
})
export class StudentCourseSubjectComponent implements OnInit {
  courseObject:any;
  student:any;
  studentID: number;
  subjects: any[];
  subject: any
  constructor( 
    private studentService:StudentService,
    private selectService: SelectService,
    private studentCourseSubjectService: StudentCourseSubjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentID = parseInt(this.route.snapshot.paramMap.get("id"));
    debugger  
    this.student= this.studentService.getStudent();
     this.getCourse(this.studentID);
     this.getSubjects(this.studentID);
  }
  getCourse(studentId: number){   
    this.studentCourseSubjectService.select(studentId).subscribe(response => {   
        this.courseObject = response[0];   
        if(!this.courseObject){
          this.courseObject = false;
        }
    });
  }
  getSubjects(studentId: number){
    debugger
    this.studentCourseSubjectService.selectSubject(studentId).subscribe(response => {       
      this.subjects = response;      
    });
  }
}
