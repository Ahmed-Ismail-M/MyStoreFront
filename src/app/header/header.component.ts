import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  tabs = [
    { label: 'Products', path: '' },
    { label: 'Cart', path: 'confirmation' },
  ];
  title: string = environment.title
  activeLink = this.tabs[0].label;
  constructor() {}

  ngOnInit(): void {}
}
