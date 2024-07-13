import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

/**
 * AuthGuard function to control access to routes based on authentication status.
 * @param route - The route being activated.
 * @param state - The state of the router at the time of activation.
 * @returns {boolean | Promise<boolean>} - Returns true if the user is logged in, otherwise redirects to the sign-in page.
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Inject the AuthService to check if the user is logged in
  const auth = inject(AuthService);
  
  // Inject the Router to navigate to different routes
  const router = inject(Router);
  
  // Check if the user is logged in
  if (auth.isLogged()) {
    // If logged in, allow navigation to the route
    return true;
  } else {
    // If not logged in, redirect to the sign-in page
    return router.navigateByUrl('/signin');
  }
};
