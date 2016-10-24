import { Component, OnInit } from '@angular/core';
import { SignUp } from '../signup.interface';

@Component({
    // moduleId: module.id,
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

   public signUp: SignUp;
  //  public submitted: boolean = false;

    ngOnInit() {
        this.signUp = {
            email: '',
            username: '',
            password: ''
        }
    }

    submit(signupForm: SignUp, isValid: boolean ) {
            if (!isValid) return;
                console.log(signupForm.username);
    }

}
