import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddService } from '../../../shared/services/add.service';
import { SelectService } from '../../../shared/select.service';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  tittle: any;
  description: any;
  credits: any;
  error: string;
  courses: any;
  code: any;
  constructor(private addService:AddService, private selectService:SelectService,private router:Router) { }
//, `tittle`, `createdate`, `credits`, `description`, `courseID`, `code`
  ngOnInit() {
    this.getCourses();  }
Save(){
  if(!this.tittle  || !this.description || !this.credits || !this.code){
    this.error = "Please complete the form";
    return false;
  }
  let data = {
    tittle:this.tittle ,
      description :this.description ,  
      credits :this.credits , 
      status:'active',
      code:this.code
      };
      console.log(data)
      this.addService.add(data,"subject/add")
      .subscribe((response)=>{
      alert(response)
      this.router.navigate(['/all-subjects']);

      });
}
getCourses(){
  this.selectService.select('course')
  .subscribe((response)=>{
  this.courses = response;
  });
  }

}
