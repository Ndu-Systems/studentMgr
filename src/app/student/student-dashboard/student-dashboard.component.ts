import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student : any;
  constructor(
    private userDataService : UserDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.student = this.userDataService.getUser();
  }

}
