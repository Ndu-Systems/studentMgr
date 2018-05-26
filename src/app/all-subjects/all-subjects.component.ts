import { Component, OnInit } from '@angular/core';
import { SelectService } from '../shared/select.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {

  constructor(private selectService:SelectService) { }
  subjects:any[];
  ngOnInit() {
    this.getDepartments();
  }
getDepartments(){
this.selectService.select('subject')
.subscribe((response)=>{
this.subjects = response;
});
}

}
