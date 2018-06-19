import { UserDataService } from './../../shared/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent implements OnInit {

  student : any;
  constructor(
    private userDataService : UserDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.student = this.userDataService.getUser();
  }

}
