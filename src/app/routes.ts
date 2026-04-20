import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'tutores',    component: TutorsComponent },
  { path: 'tutor/:id',  component: TutorProfileComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'registro',   component: RegisterComponent },
  { path: '**',         redirectTo: '' }  // Ruta por defecto
];