import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponent } from './home/home.component';

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
    }
];

export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(appRoutes); 