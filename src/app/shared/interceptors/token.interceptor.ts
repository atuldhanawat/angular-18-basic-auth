import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { catchError, switchMap } from 'rxjs';

/**
 * HTTP interceptor to add authentication tokens to requests and handle token refresh logic.
 * @param req - The outgoing HTTP request to intercept.
 * @param next - A function to handle the next interceptor or HTTP request.
 * @returns {Observable<any>} - The modified HTTP request or a new request with a refreshed token.
 */
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the AuthService to access authentication-related methods
  const authService = inject(AuthService);

  // Get the current authentication token
  const token = authService.getToken();

  // Clone the request and add the Authorization header with the current token
  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(reqClone).pipe(
    catchError((err) => {
      // Check if the error status is 401 (Unauthorized)
      if (err.status === 401) {
        // Get the refresh token
        const refreshToken = authService.getRefreshToken();
        
        // Attempt to refresh the token
        return authService.refreshToken({ token, refreshToken }).pipe(
          switchMap((res) => {
            // Update authentication data with the new token
            authService.setAuthData(res);

            // Clone the request and add the new Authorization header with the refreshed token
            const newReqClone = req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.token}`,
              },
            });

            // Retry the request with the refreshed token
            return next(newReqClone);
          }),
          catchError(() => {
            // If refreshing the token fails, log out the user and retry the original request
            authService.logout();
            return next(req);
          })
        );
      }
      // If the error is not 401, rethrow the error
      throw err;
    })
  );
};
