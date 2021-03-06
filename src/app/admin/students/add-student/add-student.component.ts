import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student-list/student.service';
import { Router } from '@angular/router';
import { AddService } from '../../../shared/services/add.service';
import { SelectService } from '../../../shared/select.service';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  message: string;
  cell: any;
  user_nmuber: string;
  password: string;
  idnumber: string;
  city: string;
  address: string;
  email: string;
  surname: string;
  name: string;
  courses : any [];
  studentId : number;
  course: any;
  constructor(private addService:AddService, private selectService:SelectService, private studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.getCourses();
  }
  AddStudent(course) {
    if(!this.name){
      this.message ="Enter student name";
      return false;
    }
    if(!this.surname){
      this.message ="Enter student surname";
      return false;
    }
    if(!this.idnumber){
      this.message ="Enter student id number";
      return false;
    }
    if(!this.address){
      this.message ="Enter student address";
      return false;
    }
    if(!this.city){
      this.message ="Enter student city";
      return false;
    }
    if(!this.cell){
      this.message ="Enter student cell";
      return false;
    }
    if(!this.course){
      this.message ="Select student course";
      return false;
    }
   
    let data = {
      name: this.name,
      surname: this.surname,
      address: this.address,
      role: 'student',
      city: this.city,
      idnumber: this.idnumber,
      cell: this.cell,
      email: `${this.name}.${this.surname}@mail.com`,
      courseId: course
    }
    LoadScreen();
    this.addService.add(data, 'student/add')
      .subscribe((response) => {
        StopLoadingScreen();
        this.studentId = response;
        if (this.studentId>0) {          
          this.router.navigate(['/add-subject-for-student', this.studentId]);
        }
      });
  }
  getCourses(){
    this.selectService.select('course')
    .subscribe((response)=>{
      this.courses = response;
    });
  }
} 
