import { Component, OnInit } from '@angular/core';
import { AddService } from '../shared/services/add.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  cell: any;
  user_nmuber: string;
  password: string;
  idnumber: string;
  city: string;
  address: string;
  email: string;
  surname: string;
  name: string;
  constructor(private addService:AddService) { }

  ngOnInit() {
  }
AddStudent(){
  let data = {
    name:this.name,
    surname:this.surname,
    address:this.address,
    role:'student',
    city:this.city,
    idnumber:this.idnumber,
    cell:this.cell,
    email : `${this.name}.${this.surname}@mail.com`

  }
  this.addService.add(data,'Account/AddUser')
  .subscribe((response)=>{
  if(response){
    alert(response);
  }
  })
}
} 
