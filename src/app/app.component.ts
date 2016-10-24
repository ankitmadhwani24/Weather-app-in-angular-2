import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public user: user;

}
