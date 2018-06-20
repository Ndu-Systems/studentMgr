import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectService } from '../../shared/select.service';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {

  public user: User;
  message: any;
  student: any;
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
    }
    else {
      this.router.navigate(['/student-dashboard']);
    }
  }

  Abort() {
    this.userService.saveUser(this.student);
    this.router.navigate(['/student-dashboard']);
  }
  isValid: boolean;
  Save(user) {
    this.isValid = true;

    if (user.name == null || user.name == "") {
      this.isValid = false;
      this.message = "fields to be updated cannot be empty";
      return;
    }
    if (user.surname == null || user.surname == "") {
      this.isValid = false;
      this.message = "fields to be updated cannot be empty";
      return;
    }
    if (user.cell == null || user.cell == "") {
      this.isValid = false;
      this.message = "fields to be updated cannot be empty";
      return;
    }
    if (user.cell.length > 13) {
      this.isValid = false;
      this.message = "Invalid Cell Number Provided";
      return;
    }
    if (user.city == null || user.city == "") {
      this.isValid = false;
      this.message = "fields to be updated cannot be empty";
      return;
    }
    if (user.address == null || user.address == "") {
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
          this.router.navigate(['/student-dashboard']);
        }
        else {
          this.message = response;
        }
      });
    }
  }
}
