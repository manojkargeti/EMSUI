import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `  
      <nb-layout>
        <nb-layout-header fixed>Company Name</nb-layout-header>
  
        <nb-sidebar>Sidebar Content</nb-sidebar>
  
        <nb-layout-column>Page Content</nb-layout-column>
      </nb-layout>
    `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
