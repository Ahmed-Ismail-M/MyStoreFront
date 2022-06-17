import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  tabs = [
    { label: 'Main', path: '' },
    { label: 'Todo', path: 'confirmation' },
  ];
  activeLink = this.tabs[0].label;
  constructor() {}

  ngOnInit(): void {}
}
