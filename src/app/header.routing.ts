import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WheatherComponent } from './wheather/wheather.component';
import { ShowWheatherComponent } from './show-wheather/show-wheather.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponentComponent
    },
    {
        path: 'contact',
        component: ContactComponentComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'wheathercity',
        component: WheatherComponent
    },
    {
        path: 'showwheather',
        component: ShowWheatherComponent
    }
];

export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(appRoutes);
