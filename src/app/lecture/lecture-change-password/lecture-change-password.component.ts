import { User } from './../../shared/user';

import { Component, OnInit } from '@angular/core';
import { LectureService } from '../../admin/lecture/lecture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-lecture-change-password',
  templateUrl: './lecture-change-password.component.html',
  styleUrls: ['./lecture-change-password.component.css']
})
export class LectureChangePasswordComponent implements OnInit {
  public confirmpassword: string;
  public oldpassword: string;
  public newpassword: string;
  public lecture: any;
  public user: User;
  public message: any;
  constructor(
    private router: Router
    , private userService: UserDataService
  ) { }

  ngOnInit() {
    this.assignValues();
  }
  assignValues() {
    this.lecture = this.userService.getUser();
    if (this.lecture) {
      this.user = new User();
      this.user.id = this.lecture.id;
      this.user.name = this.lecture.name;
      this.user.surname = this.lecture.surname;
      this.user.cell = this.lecture.cell;
      this.user.city = this.lecture.city;
      this.user.address = this.lecture.address;
      this.user.idnumber = this.lecture.idnumber;
      this.user.email = this.lecture.email;
      this.user.password = this.lecture.password;
    }
    else {
      this.router.navigate(['/lecture-dashboard']);
    }
  }
  Abort() {
    this.userService.saveUser(this.lecture);
    this.router.navigate(['/lecture-dashboard']);
  }
  isValid: Boolean;
  Save() {
    this.isValid = true;
    debugger
    if (this.oldpassword == this.user.password) {
      if (this.newpassword == null || this.newpassword == "" ||
        this.confirmpassword == "" || this.confirmpassword == null) {
        this.isValid = false;
        this.message = "fields to be updated cannot be empty";
        return;
      }
      if (this.newpassword.length < 6) {
        this.isValid = false;
        this.message = "Password lenght can not be less than 6 characters";
        this.newpassword = null;
        this.oldpassword = null;
        this.confirmpassword = null;
        return;
      }
      if (this.newpassword != this.confirmpassword) {
        this.isValid = false;
        this.message = "Passwords do not Match, please check and continue";
        this.newpassword = null;
        this.oldpassword = null;
        this.confirmpassword = null;
        return;
      }
      if (this.isValid) {
        var data = {
          password: this.newpassword,
          email: this.user.email
        }
        this.userService.updatePassword(data).subscribe(response => {
          if (response == 1) {
            alert("Account Details Updated Successfully - Click Ok to proceed");
            this.user.password = this.newpassword;
            this.userService.saveUser(this.user);
            this.router.navigate(['/lecture-dashboard']);
          }
          else {
            this.message = response;
          }
        })
      }
    } else {
      this.message = "Please enter correct Credentials and Continue";
    }
  }
}
