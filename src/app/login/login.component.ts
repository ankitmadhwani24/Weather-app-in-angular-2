import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../login.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserLogin;
  constructor(public router: Router) {}
  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }
  save(f: UserLogin, isValid: boolean) {
    console.log(isValid);
    if(isValid == true) {
      if(f.email == 'ankit' && f.password == 'ankit')
          console.log("success");
          this.router.navigate(['/contact']);
      } else {
          console.log("fail");
      }
  }
}
