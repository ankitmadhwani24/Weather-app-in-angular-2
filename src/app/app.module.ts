import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
//routings for app
import { AppRoutings } from './header.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WheatherComponent } from './wheather/wheather.component';
import { CityListService } from './city-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WheatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AppRoutings
  ],
  providers: [CityListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
