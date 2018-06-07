import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { SelectService } from '../../../shared/select.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any[];
  constructor(private selectService: SelectService, private router:Router, private studentService:StudentService) {}
  ngOnInit() {
    this.getDepartments();
  }
  getDepartments() {
    this.selectService.select("user WHERE role = 'student'").subscribe(response => {
      this.students = response;
    });
  }
  Details(student) {
  this.studentService.saveStudent(student);
  this.router.navigate(['/student-course-subject', student.id]);

  }
}
