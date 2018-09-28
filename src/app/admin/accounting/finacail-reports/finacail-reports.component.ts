import { monthNamesOrder } from "./../../../shared/config";
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
  graphMonthsLS: Array<any>;
  // Final graph vals
  graphMonthsToDisplay: Array<any>;
  graphExpensesToDisplay: Array<any> =[];
  graphIncomeToDisplay: Array<any>=[];
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
  accounting: Array<any>;
  selectedMonthIndex: any;

  constructor(private selectService: SelectService, private router: Router) {
    let date = new Date();
    this.Month = this.Months[date.getMonth()];
    this.students$ = this.selectService.select("user WHERE role = 'student'");
    this.getAccounting();

  }
loadGrhaph(){
  this.data = {
    labels: this.graphMonthsToDisplay,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#00d2d3",
        borderColor: "#00d2d3",
        data:this.graphIncomeToDisplay
      },
      {
        label: "Expenses",
        backgroundColor: "#ff9f43",
        borderColor: "#ff9f43",
        data:this.graphExpensesToDisplay
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
        console.log(this.accounting);

        this.graphMonthsLS = this.accounting.map(x => {
          return { m: x.Month, v: x.Amount, t: x.AccountTypeID };
        });

        this.calculateGraphValues();

        this.incomeLS = this.accounting.filter(
          x => x.AccountTypeID == 1 && x.Month == this.Month
        );
        this.expensesLS = this.accounting.filter(
          x => x.AccountTypeID == 2 && x.Month == this.Month
        );
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
  calculateGraphValues() {
    console.log("calculateGraphValues", this.graphMonthsLS);
    let months: Array<string> = [];
    //select disctincs monts
    this.graphMonthsLS.forEach(x => {
      if (months.filter(m => m === x.m).length === 0) {
        months.push(x.m);
      }
    });

    // sort months
    months.sort(function(a, b) {
      return monthNamesOrder[a] - monthNamesOrder[b];
    });
    this.graphMonthsToDisplay = months;
    //get total income & expenses for each month
    this.graphMonthsToDisplay.forEach(x => {
      let amountsForAmonth: Array<any> = this.graphMonthsLS.filter(
        v => v.m === x
      );
      let totalExpensesForAmonth = 0;
      let totalIncomeForAmonth = 0;

      amountsForAmonth.forEach(afam => {
        if (afam.t == 1) {
          totalExpensesForAmonth += Number(afam.v);
        } else {
          totalIncomeForAmonth += Number(afam.v);
        }
      });
      console.log(amountsForAmonth);
      console.log(`totalExpensesForAmonth`, totalExpensesForAmonth);
      console.log("totalIncomeForAmonth", totalIncomeForAmonth);

      this.graphExpensesToDisplay.push(totalExpensesForAmonth)
      this.graphIncomeToDisplay.push(totalIncomeForAmonth)
    });
    this.loadGrhaph();
  }
}
