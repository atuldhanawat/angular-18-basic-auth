import { environment } from "../../../environments/environment";

/**
 * Constructs a local storage key by prefixing it with a base key from the environment configuration.
 * @param key - The specific key to be used in local storage.
 * @returns {string} - The full local storage key, prefixed with the base key from environment settings.
 */
export const getLocalStorageKey = (key: string): string => {
  return `${environment.localStorageKey}_${key}`;
};

// src/app/shared/helpers/utils.ts

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Checks if a value is a valid email address.
   * @param email - The email address to validate.
   * @returns True if the email is valid, otherwise false.
   */
  export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Generates a unique ID (UUID) version 4.
   * @returns A UUID string.
   */
  export function generateUUID(): string {
    // UUID v4 generator
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11)
      .replace(/[018]/g, (c:any) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)).toString(16)
      );
  }
  
  /**
   * Converts a JSON string to an object with type safety.
   * @param jsonString - The JSON string to convert.
   * @param defaultValue - The default value to return if parsing fails.
   * @returns The parsed object or the default value.
   */
  export function parseJSON<T>(jsonString: string, defaultValue: T = {} as T): T {
    try {
      return JSON.parse(jsonString);
    } catch {
      return defaultValue;
    }
  }
  
  /**
   * Gets a query parameter value from the URL.
   * @param param - The name of the query parameter.
   * @returns The value of the query parameter, or null if not found.
   */
  export function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  /**
   * Delays execution for a specified amount of time.
   * @param ms - The number of milliseconds to delay.
   * @returns A promise that resolves after the specified delay.
   */
  export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  