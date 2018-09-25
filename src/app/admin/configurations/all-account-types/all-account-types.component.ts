import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-account-types',
  templateUrl: './all-account-types.component.html',
  styleUrls: ['./all-account-types.component.css']
})
export class AllAccountTypesComponent implements OnInit {

  accounts$ : Observable<any>;
  constructor(private selectService : SelectService,private router:Router) { }

  ngOnInit() {
    this.accounts$ = this.selectService.select("accounttypes WHERE TypeID NOT IN (1,2) Order By AccountTypeID ASC")
  }

  edit(account){
    this.router.navigate(['/edit-account-type', account.TypeID]);
  }
}
