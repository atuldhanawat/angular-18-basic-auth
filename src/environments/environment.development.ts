/**
 * Environment configuration for the application.
 * Provides settings for different environments (e.g., development, production).
 */
export const environment = {
  /**
   * Indicates whether the application is running in production mode.
   * Set to true for production builds to enable optimizations and disable development features.
   */
  production: false,

  /**
   * Base URL for API requests.
   * This URL is used as the base for all HTTP requests made to the backend API.
   */
  apiUrl: 'https://dummyjson.com',

  /**
   * Prefix key for local storage items.
   * Used to namespace local storage keys to avoid conflicts and manage storage.
   */
  localStorageKey: 'angular-basic'
};
