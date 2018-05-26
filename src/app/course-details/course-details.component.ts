import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from './course-details.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  subjects: any[];
  courseID: number;
  courseObject:any;
  constructor( private route: ActivatedRoute,
    private router: Router,private courseDetailsService:CourseDetailsService
  ) { }

  ngOnInit() {
    this.courseID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.courseObject=this.courseDetailsService.getCourse();
    this.getSubjects();
    
  }
getSubjects(){
this.courseDetailsService.select(this.courseID)
.subscribe((response)=>{
  this.subjects = response;
});
}
}
