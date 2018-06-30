import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {
  subjects$:Observable< any[]>;

  constructor(private selectService:SelectService) { 
    this.subjects$ =this.selectService.select('subject');
  }
  ngOnInit() {
  }


}
