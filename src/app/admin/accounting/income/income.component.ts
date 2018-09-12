import { SelectService } from './../../../shared/select.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeList$ : Observable<any>
  constructor(
    private selectService : SelectService
  ) { }

  ngOnInit() {
    this.incomeList$ = this.selectService.select("accounting  WHERE Type = 'income'");
  }
  Details(income){
    alert(JSON.stringify(income))
  }
}
