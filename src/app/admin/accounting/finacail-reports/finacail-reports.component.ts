import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SelectService } from "../../../shared/select.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-finacail-reports",
  templateUrl: "./finacail-reports.component.html",
  styleUrls: ["./finacail-reports.component.css"]
})
export class FinacailReportsComponent implements OnInit {
  data: any;
  data2: any;
  students$: Observable<any[]>;
  Month: string;
  income: number = 0;
  expenses: number = 0;
  incomeLS: Array<any>;
  expensesLS: Array<any>;
  Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  accounting: any;
  selectedMonthIndex: any;

  constructor(private selectService: SelectService, private router: Router) {
    let date = new Date();
    this.Month = this.Months[date.getMonth()];
    this.students$ = this.selectService.select("user WHERE role = 'student'");
    this.getAccounting();
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
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Profit",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#4bc0c0"
        },
        {
          label: "Loss",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "#565656"
        }
      ]
    };
  }

  ngOnInit() {}
  getAccounting() {
    this.selectService
      .select(
        "accounting ac INNER JOIN accounttypes at ON at.TypeID = ac.TypeId WHERE  at.TypeID NOT IN (1,2)"
      )
      .subscribe(data => {
        this.accounting = data;
        this.incomeLS = this.accounting.filter(x => x.AccountTypeID == 1 && x.Month == this.Month);
        this.expensesLS = this.accounting.filter(x => x.AccountTypeID == 2 && x.Month == this.Month);
        this.income = this.incomeLS.reduce((sum, accountingOject) => {
          return sum + Number(accountingOject.Amount);
        }, 0);
        this.expenses = this.expensesLS.reduce((sum, accountingOject) => {
          return sum + Number(accountingOject.Amount);
        }, 0);
      });
  }
  selectMonth() {
    this.selectedMonthIndex = this.Months.indexOf(
      this.Months.filter(x => x === this.Month)[0]
    );
this.getAccounting();
  }
}
