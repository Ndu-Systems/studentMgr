import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectService } from '../../../shared/select.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finacail-reports',
  templateUrl: './finacail-reports.component.html',
  styleUrls: ['./finacail-reports.component.css']
})
export class FinacailReportsComponent implements OnInit {

  data: any;
  students$: Observable<any[]>;
  constructor(private selectService: SelectService, private router: Router) {
    this.students$ = this.selectService.select("user WHERE role = 'student'");
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#42A5F5",
          borderColor: "#1E88E5",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "#9CCC65",
          borderColor: "#7CB342",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }

  ngOnInit() {
  }

}
