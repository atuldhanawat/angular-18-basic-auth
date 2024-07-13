import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

/**
 * Main application configuration
 * @constant {ApplicationConfig} appConfig - Configuration object for the application
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Set up the application's routes
    provideClientHydration(), // Enable client-side hydration
    provideHttpClient(
      withFetch(), // Use the Fetch API for HTTP requests
      withInterceptors([tokenInterceptor]) // Attach the token interceptor to HTTP requests
    ),
  ],
};
