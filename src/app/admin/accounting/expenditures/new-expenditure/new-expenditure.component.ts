import { Component, OnInit } from '@angular/core';
import { LoadScreen, StopLoadingScreen } from '../../../../shared/loading/load';
import { AccountingService } from '../../accounting.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-new-expenditure',
  templateUrl: './new-expenditure.component.html',
  styleUrls: ['./new-expenditure.component.css']
})
export class NewExpenditureComponent implements OnInit {

  Description;
  Type;
  Amount;
  UserId;
  Month;
  CreateUserdId;
  message;
  data;
Months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
msgs: Message[] = [];

  constructor(private accountingService:AccountingService,private router:Router) {
    this.Type = "expense";
    this.UserId = 1;
    this.CreateUserdId = 1;
  }

  ngOnInit() {}
  required(field:string):string{
    return `${field} is required!`
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Expenditure added succesfuly'});
}
  add() {
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
      Type: this.Type,
      Amount: this.Amount,
      UserId: this.UserId,
      Month: this.Month,
      CreateUserdId: this.CreateUserdId
    };
LoadScreen();
    this.accountingService.add(this.data)
    .subscribe(r=>{
      StopLoadingScreen();
      this.showSuccess();
     setTimeout(()=>{
      this.router.navigate(['/finacail-expenditure']);
     },3000);

    });   
  }
}
