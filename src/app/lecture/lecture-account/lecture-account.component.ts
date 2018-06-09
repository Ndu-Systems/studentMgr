import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/services/user-data.service';
import { SelectService } from '../../shared/select.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LectureService } from '../../admin/lecture/lecture.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-lecture-account',
  templateUrl: './lecture-account.component.html',
  styleUrls: ['./lecture-account.component.css']
})
export class LectureAccountComponent implements OnInit { 
  public user : User;
  message: any;
  lecture : any;
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
    this.lecture = this.userService.getUser();
    if(this.lecture){
      this.user = new User();
      this.user.id = this.lecture.id;
      this.user.name = this.lecture.name;
      this.user.surname = this.lecture.surname;
      this.user.cell = this.lecture.cell;
      this.user.city = this.lecture.city;
      this.user.address = this.lecture.address;
      this.user.idnumber = this.lecture.idnumber;
      this.user.email = this.lecture.email;
    }
    else{
      this.router.navigate(['/lecture-dashboard']);
    }
  }

  Abort(){
    this.userService.saveUser(this.lecture);
    this.router.navigate(['/lecture-dashboard']);
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
          this.router.navigate(['/lecture-dashboard']);
        }
        else {
          this.message = response;
        }
      });
    }
  }
}
