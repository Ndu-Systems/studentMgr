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
  data2: any;
  students$: Observable<any[]>;
  constructor(private selectService: SelectService, private router: Router) {
    this.students$ = this.selectService.select("user WHERE role = 'student'");
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Income",
          backgroundColor: "#00d2d3",
          borderColor: "#00d2d3",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Expenses",
          backgroundColor: "#ff9f43",
          borderColor: "#ff9f43",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Profit',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Loss',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
  }
  }

  ngOnInit() {
  }

}
