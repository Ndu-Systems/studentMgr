import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.userDataService.saveUser(null);
    this.router.navigate(["/"]);
  }

}
