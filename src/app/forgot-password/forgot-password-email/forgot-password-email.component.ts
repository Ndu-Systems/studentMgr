import { SelectService } from './../../shared/select.service';
import { ForgotPasswordService } from './../forgot-password.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/services/email.service';
import { WEB_HOST } from '../../shared/config';
import { LoadScreen, StopLoadingScreen } from '../../shared/loading/load';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.css']
})
export class ForgotPasswordEmailComponent implements OnInit {
  isValid: boolean;
  email : any;
  message: any;
  token : any;
  name: any;
  constructor(
    private router : Router,
    private forgotPasswordService : ForgotPasswordService,
    private emailService: EmailService,
    private selectService: SelectService
  ) { }

  ngOnInit() {
  }

  ResetPassword(){
    this.isValid = true;
    if(this.email == undefined || this.email ==""){
      this.message = "please supply required information"
      this.isValid = false;
    }

    if(this.isValid){   
      LoadScreen();   
    this.forgotPasswordService.forgotPassword(this.email).subscribe(response =>{
      if(response){
        if(response == 1){
          StopLoadingScreen();
          this.selectService.select("user where email = '"+this.email+"'").subscribe(response => {
            if(response){
                this.token = response[0].token;
                this.name = response[0].name;
                let email = {
                  email: this.email,
                  subject: 'Forgot Password - Reset',
                  message: `Hi ${this.name} ! <br/>
                                 <h2>Woooh! Forgot Your Password?</h2> <br/>
                                 Happens to the Best of Us!<br/>
                                 Please click link below to reset password<br/>
                                 <table>
                                 <tr>
                                 <td><a href=${WEB_HOST}/#/forgot-password?tokken=${this.token}>Reset Password</a> </td>                    
                                 <td> </td>
                                 </tr>                                                  
                                 </table><br/>
                                 We hope you find this a Good Read... Visit us Again
                                 `
                }
            
                this.emailService.sendEmail(email).subscribe((data) => {
                  if (data === 1) {
                    alert("Email Sent");
                    this.router.navigate(['/']);
                  }
                  else {
                    alert(data);
                  }
                })
            }
          })
        }else{
          StopLoadingScreen();
          this.message = "Invalid Email Address"
        }
      }
    });
    }


  }

}
