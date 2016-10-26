import { Component, OnInit } from '@angular/core';
import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../login.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
  trigger('heroState', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate(500)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]
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
          this.router.navigate(['/wheathercity']);
      } else {
          console.log("fail");
      }
  }
}
