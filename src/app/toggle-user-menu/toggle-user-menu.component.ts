import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-toggle-user-menu',
  templateUrl: './toggle-user-menu.component.html',
  styleUrls: ['./toggle-user-menu.component.css']
})
export class ToggleUserMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
  }

}
