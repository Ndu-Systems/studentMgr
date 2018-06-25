import { Router } from '@angular/router';

import { Component, OnInit } from "@angular/core";
import { AddService } from "../../../shared/services/add.service";
import { SelectService } from "../../../shared/select.service";

@Component({
  selector: "app-add-couse",
  templateUrl: "./add-couse.component.html",
  styleUrls: ["./add-couse.component.css"]
})
export class AddCouseComponent implements OnInit {
  error: string;
  department: any;
  credits: any;
  description: any;
  tittle: any;
  departements: any[];
  constructor(
    private addService: AddService,
    private selectService: SelectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDepartments();
  }
  Save() {
    if (
      !this.tittle ||
      !this.department ||
      !this.description ||
      !this.credits
    ) {
      this.error = "Please complete the form";
      return false;
    }
    let data = {
      tittle: this.tittle,
      description: this.description,
      credits: this.credits,
      department: this.department,
      status: "active"
    };

    this.addService.add(data, "course/add").subscribe(response => {
      alert(response);
      this.router.navigate(['/all-courses']);

    });
  }
  getDepartments() {
    this.selectService.select("department").subscribe(response => {
      this.departements = response;
    });
  }
}
