import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../users/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  user: User;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private userService: UserService){}

  ngOnInit() {
    this.initializeUser();
  }

  private initializeUser () {
    this.user = {
      id: null,
      name: '',
      totalPosts: 0,
      bio: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }

}
