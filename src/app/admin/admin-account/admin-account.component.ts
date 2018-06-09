import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { LectureService } from '../lecture/lecture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

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
        }
        else{
          this.router.navigate(['/user-dashboard']);
        }
      }

      Abort(){
        this.userService.saveUser(this.admin);
        this.router.navigate(['/user-dashboard']);
      }

      isValid : boolean;
      Save(user){
        this.isValid = true;
    
        if(user.name == null || user.name == ""){
          this.isValid = false;
          this.message = "fields to be updated cannot be empty";
          return;
        }
        if(user.surname == null || user.surname == ""){
          this.isValid = false;
          this.message = "fields to be updated cannot be empty";
          return;
        }
        if(user.cell == null || user.cell == ""){
          this.isValid = false;
          this.message = "fields to be updated cannot be empty";
          return;
        }
        if(user.cell.length > 13){
          this.isValid = false;
          this.message = "Invalid Cell Number Provided";
          return;
        }
        if(user.city == null || user.city == ""){
          this.isValid = false;
          this.message = "fields to be updated cannot be empty";
          return;
        }
        if(user.address == null || user.address == "" ){
          this.isValid = false;
          this.message = "fields to be updated cannot be empty";
          return;
        }
        if (this.isValid) {
          var data = {
            id: user.id
            , name: user.name
            , surname: user.surname
            , cell: user.cell
            , city: user.city
            , address: user.address
            , email: user.email
          };
          alert("You are About To Change Things - Click OK to proceed");
          this.userService.updateUser(data).subscribe(response => {
            if (response == 1) {
              alert("Account Details Updated Successfully - Click Ok to proceed");
              this.userService.saveUser(user);
              this.router.navigate(['/user-dashboard']);
            }
            else {
              this.message = response;
            }
          });
        }
      }

}
