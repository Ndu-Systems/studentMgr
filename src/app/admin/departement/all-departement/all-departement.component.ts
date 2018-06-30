import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { SelectService } from "../../../shared/select.service";

@Component({
  selector: "app-all-departement",
  templateUrl: "./all-departement.component.html",
  styleUrls: ["./all-departement.component.css"]
})
export class AllDepartementComponent implements OnInit {
  departements$: Observable<any[]>;
  constructor(private selectService: SelectService) {
    this.departements$ = this.selectService.select("department");
  }
  ngOnInit() {}
}
