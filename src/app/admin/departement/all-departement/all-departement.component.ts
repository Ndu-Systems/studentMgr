import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared/select.service';

@Component({
  selector: 'app-all-departement',
  templateUrl: './all-departement.component.html',
  styleUrls: ['./all-departement.component.css']
})
export class AllDepartementComponent implements OnInit {

  constructor(private selectService:SelectService) { }
  departements:any[];
  ngOnInit() {
    this.getDepartments();
  }
getDepartments(){
this.selectService.select('department')
.subscribe((response)=>{
this.departements = response;
});
}
}
