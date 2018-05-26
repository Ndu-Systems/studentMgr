import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/services/user-data.service';
import { EmailService } from '../shared/services/email.service';
import { ResetUserService } from '../shared/reset-user.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    parentlink: string;
    // register: Register;
    name: string;
    surname: string;
    email: string;
    password: string;
    message: any;
    isValid: boolean;
    passwordConfirm: string;
    code: number;
    // Persona details
    cell: string;
    address: string;
    idnum: string;
    country: string;
    city: string;
    countries = ["South Africa", "America"];
  
    //banking data
    user: any;
    bankname: string;
    branch: string;
    accountnumber: string;
    accountType: string;
    banks = [
      "Absa",
      "African Bank Limited",
      "Capitec Bank",
      "First National Bank",
      "Bidvest Bank Limited",
      "Nedbank Limited",
      "Imperial Bank South Africa",
      "Investec Bank Limited",
      "Sasfin Bank Limited"
    ];
    accounts = ["Cheque", "Savings"];
  
    constructor(
      private http: RegisterService,
      private router: Router,
      private userDataService: UserDataService,
      private resetUserService: ResetUserService,
      private emailService: EmailService,
      private location: LocationStrategy
    ) {}
  
    ngOnInit() {
      let baseUrlMain = (<any>this.location)._platformLocation.location.href;
      if (baseUrlMain.toLowerCase().includes("link=")) {
        this.parentlink = baseUrlMain.toLowerCase();
      } else {
        this.parentlink = "";
      }
    }
  
    Join() {
      this.code = Math.floor(4000 * (Math.random() + 1));
  
      this.isValid = true;
      if (this.name == undefined || this.surname == undefined) {
        this.isValid = false;
        this.message = "Please enteryour name and surname";
        return;
      }
      if (this.email == undefined) {
        this.isValid = false;
        this.message = "Please enter a valid email address!";
        return;
      }
      if (this.cell == undefined) {
        this.isValid = false;
        this.message = "Please enter a valid cell number!";
        return;
      }
      if (this.cell.length != 10) {
        this.isValid = false;
        this.message = "Please enter a valid cell number!";
        return;
      }
      // if (!isNaN(parseInt(this.cell))) {
      //   this.isValid = false;
      //   this.message = "Please enter a valid cell number!";
      //   return;
      // }
      if (this.password == undefined) {
        this.isValid = false;
        this.message = "Please create your password!";
        return;
      }
      if (this.password.length < 8) {
        this.isValid = false;
        this.message = "Your password has to be at least 8 characters long.";
        return;
      }
      if (this.passwordConfirm == undefined) {
        this.isValid = false;
        this.message = "Please confirm your password!";
        return;
      }
      if (this.password !== this.passwordConfirm) {
        this.isValid = false;
        this.message = "Password does not match!";
        return;
      }
      if (this.address == undefined) {
        this.isValid = false;
        this.message = "Please enter your address!";
        return;
      }
      if (this.country == undefined) {
        this.isValid = false;
        this.message = "Please select your country!";
        return;
      }
      if (this.bankname == undefined) {
        this.isValid = false;
        this.message = "Please select your bank name!";
        return;
      }
      if (this.accountType == undefined) {
        this.isValid = false;
        this.message = "Please select your account Type!";
        return;
      }
      if (this.branch == undefined) {
        this.isValid = false;
        this.message = "Please enter your  branch!";
        return;
      }
      if (this.accountnumber == undefined) {
        this.isValid = false;
        this.message = "Please enter your  account number!";
        return;
      }
      if (this.isValid) {
        let data = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          code: this.code,
          parentlink: this.parentlink,
          cell: this.cell,
          address: this.address,
          bankname: this.bankname,
          accountType: this.accountType,
          branch: this.branch,
          accountnumber: this.accountnumber,
          country: this.country
        };
        this.http.registerUser(data).subscribe(response => {
          if (response === 1) {
            // alert("User Saved");
            this.resetUserService
              .resurtUser(data.email, data.password)
              .subscribe(res => {
                this.userDataService.saveUser(res);
              });
  
            // send verification
            let email={
              emailFrom:"welcome@pip-coin.com",
              to:this.email,
              name:this.name,
              subject:"Email Verification",
              msg: `Welcome to Pip Coin,Your verification code is ${this.code}`
            }

            this.emailService.sendEmail(email).subscribe(d => {
              alert("Your account was created successfully");
              this.router.navigate(['user-dashboard']);   
            });
          } else {
            this.message = response;
          }
        });
      }
    }
  
  

}

