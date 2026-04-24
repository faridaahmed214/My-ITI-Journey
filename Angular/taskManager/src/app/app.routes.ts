import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest-guard';
export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.Login),
    canActivate: [guestGuard] 
  },
  { 
    path: 'signup', 
    loadComponent: () => import('./components/sign-up/sign-up').then(m => m.SignUp),
    canActivate: [guestGuard] 
  },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then(m => m.MainLayout),
    canActivate: [authGuard],
    children: [
      { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home').then(m => m.Home) 
      },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) 
      },
      { path: 'add-task', loadComponent: () => import('./pages/add-task/add-task').then(m => m.AddTask) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { 
    path: '**', 
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound) 
  }
];
