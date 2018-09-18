import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';
import { ConfigurationsService } from '../configurations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account-type',
  templateUrl: './add-account-type.component.html',
  styleUrls: ['./add-account-type.component.css']
})
export class AddAccountTypeComponent implements OnInit {
  Description;
  user;
  data;
  message;
  msgs: Message[] = [];
  accounttypes = [{ id: 1, title: "INCOME" }, { id: 2, title: "EXPENSE" }]
  constructor(private configurationService : ConfigurationsService, private router : Router) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
  }
  required(field: string): string {
    return `${field} is required!`
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Account Type added succesfuly' });
  }
  add(accounttype) {
    if(!this.Description){
      this.message = this.required('Description');
      return false;
    }
    if(!accounttype){
      this.message = this.required('Account Type');
      return false;
    }
    this.data = {
      Description: this.Description,
      CreateUserdId: this.user.userid,
      AccountTypeID: accounttype
    };
    LoadScreen();
    this.configurationService.add(this.data)
        .subscribe(response => {
          StopLoadingScreen();
          this.showSuccess();
          setTimeout(()=>{
            this.router.navigate(['/all-account-types']);
           },3000);
        })

  }
}
