import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../../shared/select.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  expenses$ : Observable<any>
  constructor(
    private selectService : SelectService
  ) { }

  ngOnInit() {
    this.expenses$ = this.selectService.select("accounting ac INNER JOIN accounttypes at ON at.TypeID = ac.TypeId WHERE at.AccountTypeID = 2 AND at.TypeID NOT IN (1,2)");
  }

}
