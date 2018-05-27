import { Component, OnInit } from '@angular/core';
import { AddService } from '../shared/services/add.service';
import { SelectService } from '../shared/select.service';
import { StudentService } from '../student-list/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

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
    this.addService.add(data, 'student/add')
      .subscribe((response) => {
        this.studentId = response;
        if (this.studentId>0) {          
          let data2 =
          {
            courseId: data.courseId,
            studentId : this.studentId
          };
          this.addService.add(data2,'student_course/add').subscribe((response)=>{
            let userData = data;
            userData["studentId"] = data2.studentId;
              this.studentService.saveStudent(userData);
              this.router.navigate(['/add-subject-for-student']);

          });
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
