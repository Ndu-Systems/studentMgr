import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserDataService } from '../../shared/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent implements OnInit {

  public confirmpassword: string;
  public oldpassword: string;
  public newpassword: string;
  public student: any;
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
    this.student = this.userService.getUser();
    if (this.student) {
      this.user = new User();
      this.user.id = this.student.id;
      this.user.name = this.student.name;
      this.user.surname = this.student.surname;
      this.user.cell = this.student.cell;
      this.user.city = this.student.city;
      this.user.address = this.student.address;
      this.user.idnumber = this.student.idnumber;
      this.user.email = this.student.email;
      this.user.password = this.student.password;
    }
    else {
      this.router.navigate(['/student-dashboard']);
    }
  }
  Abort() {
    this.userService.saveUser(this.student);
    this.router.navigate(['/student-dashboard']);
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
            this.router.navigate(['/student-dashboard']);
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
