import { Router } from '@angular/router';
import { SelectService } from './../../shared/select.service';
import { UserDataService } from './../../shared/services/user-data.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-lecture-nav',
  templateUrl: './lecture-nav.component.html',
  styleUrls: ['./lecture-nav.component.css']
})
export class LectureNavComponent implements OnInit {
  lecture : any;  
  constructor(
   private userDataService: UserDataService
    ,private router: Router
 
  ) { }

  ngOnInit() {
    this.lecture = this.userDataService.getUser(); 
  }

  mySubjects(){
    this.userDataService.saveUser(this.lecture);    
    this.router.navigate(['/lecture-subjects', this.lecture.id]);
  }

}
