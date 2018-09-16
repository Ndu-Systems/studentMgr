import { SelectService } from './../../../../shared/select.service';
import { Observable } from 'rxjs/Observable';
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
  Amount;
  Month;
  message;
  data;
Months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
msgs: Message[] = [];
student: any;
user:any;  
TypeID:number = Number(localStorage.getItem("AccountTypeID"));
accountingType$:Observable<any>;
  constructor(private accountingService:AccountingService,private router:Router, private selectService: SelectService) {
  this.student = JSON.parse(localStorage.getItem("Student"));
  this.user = JSON.parse(localStorage.getItem("currentUser"));
this.accountingType$ = this.selectService.select(`accounttypes WHERE TypeID = ${this.TypeID}`)
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
      TypeId: this.TypeID, //To Be changed based off Student Tuition, Accomodation and Sponsorship
      Amount: this.Amount,
      UserId: this.student.id,
      Month: this.Month,
      CreateUserdId: this.user.userid
    };
LoadScreen();
    this.accountingService.add(this.data)
    .subscribe(r=>{
      StopLoadingScreen();
      this.showSuccess();
     setTimeout(()=>{
      this.router.navigate(['/finacial-income']);
     },3000);

    });   
  }
}
