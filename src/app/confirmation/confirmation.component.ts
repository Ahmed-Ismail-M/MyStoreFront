import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user: User = {full_name:'', address:"", cc:""}
  total: string= '0'
  constructor() { }

  ngOnInit(): void {
  }

}
