import { Component, OnInit } from '@angular/core';
import { AddService } from '../../../shared/services/add.service';
import { SelectService } from '../../../shared/select.service';
import { Router } from '@angular/router';
import { LectureService } from '../lecture.service';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit {

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
  lectureId : number;
  course: any;
  constructor(private addService:AddService, private selectService:SelectService, private lectureService:LectureService, private router:Router) { }

  ngOnInit() {
    this.getCourses();
  }
  AddStudent(course) {
    let data = {
      name: this.name,
      surname: this.surname,
      address: this.address,
      role: 'lecture',
      city: this.city,
      idnumber: this.idnumber,
      cell: this.cell,
      email: `${this.name}.${this.surname}@teaching.com`,
      courseId: course
    }
    this.addService.add(data, 'lecture/add')
      .subscribe((response) => {
        this.lectureId = response;
        if (this.lectureId>0) {          
          let data2 =
          {
            courseId: data.courseId,
            lectureId : this.lectureId
          };
          LoadScreen();
          this.addService.add(data2,'lecture_course/add').subscribe((response)=>{
            StopLoadingScreen();
            let userData = data;
            userData["lectureId"] = data2.lectureId;
              this.lectureService.saveLecture(userData);
              this.router.navigate(['/add-subject-for-lecture']);

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
