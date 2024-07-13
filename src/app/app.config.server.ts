import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Define the server-specific configuration for the Angular application
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Provide server rendering capabilities
  ]
};

/**
 * Merge the main application configuration with the server-specific configuration.
 * @constant {ApplicationConfig} config - The merged application configuration.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
