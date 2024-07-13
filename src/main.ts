import { bootstrapApplication } from '@angular/platform-browser';  // Import function to bootstrap the Angular application
import { appConfig } from './app/app.config';  // Import the application configuration
import { AppComponent } from './app/app.component';  // Import the root component of the application

/**
 * Bootstrap the Angular application.
 * This function initializes the Angular application with the provided root component and configuration.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));  // Catch and log any errors that occur during bootstrapping
