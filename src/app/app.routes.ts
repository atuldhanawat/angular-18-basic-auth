import { Routes } from '@angular/router';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { authGuard } from './shared/guards/auth.guard';

/**
 * Application routes configuration
 * @constant {Routes} routes - Array of route objects defining the application paths
 */
export const routes: Routes = [
  {
    path: 'home', // Path for the home page
    loadComponent: () => import('./modules/home/home.component').then((mod) => mod.HomeComponent), // Lazy-load HomeComponent
    canActivate: [authGuard], // Apply authGuard to protect this route
  },
  {
    path: 'signin', // Path for the sign-in page
    component: SigninComponent, // Component for the sign-in page
  },
  {
    path: '', // Default route
    redirectTo: 'home', // Redirect to the home route
    pathMatch: 'full', // Ensure the full path is matched for redirection
  },
];
