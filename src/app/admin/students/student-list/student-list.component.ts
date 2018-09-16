import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { SelectService } from '../../../shared/select.service';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students$:Observable< any[]>;
  searchText : any;
  constructor(private selectService: SelectService, private router:Router, private studentService:StudentService) {
    this.students$ =  this.selectService.select("user WHERE role = 'student'");
  }
  ngOnInit() {
  }
  Details(student) {
  this.studentService.saveStudent(student);
  this.router.navigate(['/student-course-subject', student.id]);
  }
}
