import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('NavbarComponent');
  }

}
