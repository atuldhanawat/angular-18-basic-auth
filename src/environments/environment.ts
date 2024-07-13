/**
 * Environment configuration for the production build of the application.
 * Contains settings specific to the production environment.
 */
export const environment = {
  /**
   * Indicates that the application is running in production mode.
   * This should be set to true in production builds to enable optimizations and disable development features.
   */
  production: true,

  /**
   * Base URL for API requests in the production environment.
   * This URL is used as the base for all HTTP requests made to the backend API.
   */
  apiUrl: 'https://dummyjson.com',

  /**
   * Prefix key for local storage items.
   * This prefix is used to namespace local storage keys, preventing conflicts with other applications or libraries.
   */
  localStorageKey: 'angular-basic'
};
