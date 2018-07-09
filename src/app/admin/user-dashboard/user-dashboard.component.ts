import { Observable } from 'rxjs/observable';
import { AdminDashService } from './admin-dash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
counts$:Observable<any>;

  constructor(private adminDashService:AdminDashService) { 
    this.counts$ = this.adminDashService.getCounts();
  }

  ngOnInit() {
  }

}
