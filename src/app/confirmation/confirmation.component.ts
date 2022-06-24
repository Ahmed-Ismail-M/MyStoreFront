import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user: User = {full_name:'', address:"", cc:""}
  total: string= '0'
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = history.state.user
    this.total = history.state.total
  }
  back(){
    this.router.navigate([''])
  }
}
