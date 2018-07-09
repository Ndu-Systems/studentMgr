import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from './course-details.service';
import { SelectService } from '../../shared/select.service';
import { AddService } from '../../shared/services/add.service';
import { LoadScreen, StopLoadingScreen } from '../../shared/loading/load';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  subjects: any[];
  Allsubjects: any[];
  courseID: number;
  courseObject:any;
  error:any;
  sub:any;
  constructor( private route: ActivatedRoute,
    private router: Router,private courseDetailsService:CourseDetailsService,private selectService: SelectService, private addService: AddService
  ) { }

  ngOnInit() {
    this.courseID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.courseObject=this.courseDetailsService.getCourse();
    this.getSubjects();
    this.getAllSubjects();
    
  }
getSubjects(){
this.courseDetailsService.select(this.courseID)
.subscribe((response)=>{
  this.subjects = response;
});
}
getAllSubjects(){
  this.selectService.select("subject").subscribe(response => {
       
    this.Allsubjects = response;
  });
}
addSubjectToAList(sub){
  if(!sub){
    alert(`Select subject to add to ${this.courseObject.tittle}`);
    return false;
  }
  let data = {
    courseID: this.courseObject.id,
    subjectID: sub
  };
LoadScreen();
  this.addService.add(data, "course_subject/add").subscribe(response => {  
    this.getSubjects();
    StopLoadingScreen();    
    alert(response);
  });
}

}
