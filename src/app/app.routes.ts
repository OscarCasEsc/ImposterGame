import { Routes } from '@angular/router';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: SignIn,
  },
  {
    path: 'SignIn',
    component: SignIn,
  },
  {
    path: 'SignUp',
    component: SignUp,
  },
  {
    path: '**',
    component: NotFound,
  },
];
