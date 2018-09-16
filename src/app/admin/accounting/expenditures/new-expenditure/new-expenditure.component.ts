import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';
import { LoadScreen, StopLoadingScreen } from '../../../../shared/loading/load';
import { AccountingService } from '../../accounting.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/message';
import { SelectService } from '../../../../shared/select.service';

@Component({
  selector: 'app-new-expenditure',
  templateUrl: './new-expenditure.component.html',
  styleUrls: ['./new-expenditure.component.css']
})
export class NewExpenditureComponent implements OnInit {

  Description;
  Amount;
  UserId;
  Month;
  CreateUserdId;
  message;
  data;
  staff : any;
  expenditureType;
  user;
  expenditureTypes$ : Observable<any>;
Months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
msgs: Message[] = [];

  constructor(private accountingService:AccountingService,private selectService: SelectService,private router:Router) {
    this.staff = JSON.parse(localStorage.getItem("staff"));
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.UserId = this.staff.id;
    this.CreateUserdId = this.user?this.user.userid:1;
    this.expenditureTypes$ = this.selectService.select("accounttypes WHERE AccountTypeID = 2 AND TypeId <> 2");

  }

  ngOnInit() {}
  required(field:string):string{
    return `${field} is required!`
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Expenditure added succesfuly'});
}
  add(expenditureType) {
    this.message = undefined;
    if(!this.Description){
      this.message = this.required('Description');
      return false;
    }
    if(!this.Amount){
      this.message = this.required('Amount');
      return false;
    }
    if(!this.Month){
      this.message = this.required('Month');
      return false;
    }
    this.data = {
      Description: this.Description,
      TypeId: expenditureType, 
      Amount: this.Amount,
      UserId: this.UserId,
      Month: this.Month,
      CreateUserdId: this.CreateUserdId
    };
    debugger
LoadScreen();
    this.accountingService.add(this.data)
    .subscribe(r=>{
      StopLoadingScreen();
      this.showSuccess();
     setTimeout(()=>{
      this.router.navigate(['/finacial-expenditure']);
     },3000);

    });   
  }
}
