import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddService } from '../../../shared/services/add.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  status: string="active";
  error: string;
  name: any;
  constructor(private addService:AddService,private router:Router) { }

  ngOnInit() {
  }
  Save() {
    if(this.name){
let data = {
  name:this.name,
  status: this.status
}
this.addService.add(data,"department/add")
.subscribe((response)=>{
alert(response);
this.router.navigate(['/all-departement']);
});
    }else{
      this.error = "Enter department name";
    }
  }
}
