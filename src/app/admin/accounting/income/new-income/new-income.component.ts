import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { AccountingService } from "../../accounting.service";
import { Message } from 'primeng/components/common/message';
import { LoadScreen, StopLoadingScreen } from "../../../../shared/loading/load";

@Component({
  selector: "app-new-income",
  templateUrl: "./new-income.component.html",
  styleUrls: ["./new-income.component.css"]
})
export class NewIncomeComponent implements OnInit {
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
    this.Type = "income";
    this.UserId = 1;
    this.CreateUserdId = 1;
  }

  ngOnInit() {}
  required(field:string):string{
    return `${field} is required!`
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Income added succesfuly'});
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
      this.router.navigate(['/finacail-income']);
     },3000);

    });   
  }
}
