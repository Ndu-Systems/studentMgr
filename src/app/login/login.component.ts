import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/services/user-data.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'John.Smith@btc.edu.za';
  password ='John123';
  message='';
  constructor(private loginServiceService:LoginService, private router:Router,private userDataService:UserDataService) { }

  ngOnInit() {
  }

  Login(){
  this.loginServiceService.loginUser(this.email, this.password)
  .subscribe((data)=>{
    if(data.name){
      this.userDataService.saveUser(data);
      this.router.navigate(['user-dashboard']);

    }else{
      this.message = "Oops! Your user name or password is incorrect please CHECK and try again.";
    }
  })
  }

}
