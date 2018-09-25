import { SelectService } from './../../../shared/select.service';
import { Observable } from 'rxjs/Observable';
import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { ConfigurationsService } from '../configurations.service';
import { Router } from '@angular/router';
import { LoadScreen, StopLoadingScreen } from '../../../shared/loading/load';

@Component({
  selector: 'app-edit-account-type',
  templateUrl: './edit-account-type.component.html',
  styleUrls: ['./edit-account-type.component.css']
})
export class EditAccountTypeComponent implements OnInit {
  user;
  accountid;
  message;
  data;
  account$: Observable<any>;
  msgs: Message[] = [];
  accounttypes = [{ id: 1, title: "INCOME" }, { id: 2, title: "EXPENSE" }]

  constructor(
    private configurationService: ConfigurationsService,
    private router: Router,
    private route: ActivatedRoute,
    private selectService: SelectService
  ) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.accountid = parseInt(this.route.snapshot.paramMap.get("id"));
    this.account$ = this.selectService.select(`accounttypes WHERE TypeID = ${this.accountid}`);
  }
  required(field: string): string {
    return `${field} is required!`
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Account Type updated succesfuly' });
  }

  edit(model, accounttype) {
    if (!model.Description) {
      this.message = this.required('Description');
      return false;
    }
    if (!accounttype) {
      this.message = this.required('Account Type');
      return false;
    }

    this.data = {
      Description: model.Description,
      ModifyUserId: this.user.userid,
      AccountTypeID: accounttype,
      StatusId: model.StatusId,
      TypeID: model.TypeID
    };
    debugger
    LoadScreen();
    this.configurationService.edit(this.data)
      .subscribe(response => {
        debugger
        if (response == 1) {
          StopLoadingScreen();
          this.showSuccess();
          setTimeout(() => {
            this.router.navigate(['/all-account-types']);
          }, 3000);
        }

      })
  }

  archive(model){
    model.StatusId = 2;
    debugger
    this.edit(model, model.AccountTypeID);
  }
}
