import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-account-types',
  templateUrl: './all-account-types.component.html',
  styleUrls: ['./all-account-types.component.css']
})
export class AllAccountTypesComponent implements OnInit {

  accounts$ : Observable<any>;
  constructor(private selectService : SelectService) { }

  ngOnInit() {
    this.accounts$ = this.selectService.select("accounttypes WHERE TypeID NOT IN (1,2) Order By AccountTypeID ASC")
  }
}
