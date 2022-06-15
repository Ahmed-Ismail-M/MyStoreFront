import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit(): void {
  }

}
