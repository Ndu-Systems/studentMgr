import { Router } from '@angular/router';
import { AddService } from './../shared/services/add.service';
import { CourseDetailsService } from './../course-details/course-details.service';
import { SelectService } from './../shared/select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-subject',
  templateUrl: './course-subject.component.html',
  styleUrls: ['./course-subject.component.css']
})
export class CourseSubjectComponent implements OnInit {

  subjects: any[]
  subject: any
  courseObject:any
  constructor(private selectService: SelectService , private courseDetailsService: CourseDetailsService, private addService: AddService, private router:Router) { }

  ngOnInit() {
      this.getSubjects();
     this.courseObject = this.courseObject=this.courseDetailsService.getCourse();
  }
  getSubjects() {
    this.selectService.select("subject").subscribe(response => {
       
      this.subjects = response;
    });
  }

  Save(){
  
    let data = {
      courseID: this.courseObject.id,
      subjectID: this.subject
    };

    this.addService.add(data, "course_subject/add").subscribe(response => {       
      alert(response);
      this.router.navigate(['/course', data.courseID]);
    });
  }



}
