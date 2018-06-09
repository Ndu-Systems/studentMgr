import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { LectureService } from '../lecture/lecture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
  
  public confirmpassword : string;
  public oldpassword : string;
  public newpassword : string;
  public user : User;
  message: any;
  admin : any;
  constructor(
    private lectureService: LectureService
    ,private router: Router
    ,private route: ActivatedRoute
    ,private selectService: SelectService
    ,private userService: UserDataService
      ) { }
      ngOnInit() {
        this.assignValues();
      } 
      assignValues(){
        this.admin = this.userService.getUser();
        if(this.admin){
          this.user = new User();
          this.user.id = this.admin.id;
          this.user.name = this.admin.name;
          this.user.surname = this.admin.surname;
          this.user.cell = this.admin.cell;
          this.user.city = this.admin.city;
          this.user.address = this.admin.address;
          this.user.idnumber = this.admin.idnumber;
          this.user.email = this.admin.email;
          this.user.password = this.admin.password;
        }
        else{
          this.router.navigate(['/user-dashboard']);
        }
      }

      Abort(){
        this.userService.saveUser(this.admin);
        this.router.navigate(['/user-dashboard']);
      }

      isValid : Boolean;
      Save(){
        this.isValid = true;
          debugger
        if (this.oldpassword == this.user.password) {
            if ( this.newpassword == null || this.newpassword == "" || 
            this.confirmpassword == "" || this.confirmpassword == null )
            {
              this.isValid = false;
              this.message = "fields to be updated cannot be empty";
              this.oldpassword = null;
              this.newpassword = null;
              this.confirmpassword = null;
              return;
            }
            if(this.newpassword.length < 6){
              this.isValid = false;
              this.message = "Password lenght can not be less than 6 characters";
              this.newpassword = null;
              this.oldpassword = null;
              this.confirmpassword = null;
              return;
            }
            if(this.newpassword != this.confirmpassword){
              this.isValid = false;
              this.message = "Passwords do not Match, please check and continue";
              this.newpassword = null;
              this.oldpassword = null;
              this.confirmpassword = null;
              return;
            }
            if(this.isValid){
              var data = {
                password: this.newpassword,
                email : this.user.email
              }
              this.userService.updatePassword(data).subscribe(response => {
                if(response == 1){
                  alert("Account Details Updated Successfully - Click Ok to proceed");
                  this.user.password = this.newpassword;
                  this.userService.saveUser(this.user);
                  this.router.navigate(['/user-dashboard']);
                }
                else{
                  this.message = response;
                }
              })
            }
        } else {
          this.message = "Please enter correct Credentials and Continue";
              this.newpassword = null;
              this.oldpassword = null;
              this.confirmpassword = null;
        }
      }

}
