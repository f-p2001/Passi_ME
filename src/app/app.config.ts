import { provideRouter, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } 
];

export const appConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()) 
  ]
};

