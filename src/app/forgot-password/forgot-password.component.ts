import { Router } from "@angular/router";
import { UserDataService } from "./../shared/services/user-data.service";
import { SelectService } from "./../shared/select.service";
import { Component, OnInit } from "@angular/core";
import { LocationStrategy } from "@angular/common";
import { User } from "../shared/user";
import { LoadScreen, StopLoadingScreen } from "../shared/loading/load";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  message: string;
  token: any;
  constructor(
    private location: LocationStrategy,
    private selectService: SelectService,
    private userDataService: UserDataService,
    private router: Router
  ) {}
  tokken: string;
  user: User;
  password: string;
  passwordConfirm: string;
  email: string;
  ngOnInit() {
    let baseUrlMain: string = (<any>this.location)._platformLocation.location
      .href;
    this.token = baseUrlMain.substring(baseUrlMain.indexOf("=") + 1);
    this.getUserBuToken();
  }
  getUserBuToken() {
    if (!this.token) {
    }
    this.selectService
      .select(`user WHERE token = '${this.token}'`)
      .subscribe(user => {
        let check: any[] = user;
        if (check.length == 0) {
          alert("invalid link");
          this.router.navigate(["/"]);
        }
        this.user = user[0];

        console.log(this.user);
      });
  }
  Save() {
    if (this.email !== this.user.email) {
      this.message = "Please enter the valid email address";
      return false;
    }
    if (!this.password) {
      this.message = "Please enter password";
      return false;
    }
    if (this.password.length < 8) {
      this.message = "You password must be atleast 8 characters";
      return false;
    }
    if (this.password != this.passwordConfirm) {
      this.message = "Passwords do not match";
      return false;
    }
    if (this.password == this.user.password) {
      this.message = "You cannot use the same password as your previous";
      return false;
    }

    let data = {
      password: this.password,
      email: this.email
    };
    LoadScreen();
    this.userDataService.updatePassword(data).subscribe(response => {
      StopLoadingScreen();
      if (parseInt(response) === 1) {
        this.user = null;
        alert("Password was updated, click Ok to login");
        this.router.navigate(["/"]);
      }
    });
  }
}
