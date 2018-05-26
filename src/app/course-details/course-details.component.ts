import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: number;
  constructor( private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
alert(this.id)
  }

}
