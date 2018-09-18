import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdminDashService } from '../user-dashboard/admin-dash.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  counts$:Observable<any>;

  constructor(private adminDashService:AdminDashService) { 
    this.counts$ = this.adminDashService.getCounts();
  }
  ngOnInit() {
  }

}
