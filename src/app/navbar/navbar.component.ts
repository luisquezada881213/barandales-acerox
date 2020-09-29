import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToElement(elementName){
    const element = document.querySelector(elementName);
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

}
