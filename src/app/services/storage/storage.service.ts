import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { getLocalStorageKey } from '../../shared/helpers/utils';

/**
 * Custom implementation of the Storage interface to provide a
 * fallback for localStorage when it is not available.
 */
class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;

  clear(): void {}
  getItem(key: string): string | null { return null; }
  key(index: number): string | null { return null; }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService implements Storage {

  private storage: Storage;

  constructor() {
    // Default to custom LocalStorage implementation
    this.storage = new LocalStorage();

    // Switch to real localStorage if running in the browser
    AppComponent.isBrowserPlatform.subscribe((isBrowser) => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  [name: string]: any;

  length: number = 0;

  /**
   * Clears all keys in the storage.
   */
  clear(): void {
    this.storage.clear();
  }

  /**
   * Retrieves the item from storage.
   * @param key - The key of the item to retrieve.
   * @param isJson - Indicates if the item is stored in JSON format.
   * @returns The retrieved item, parsed if it is JSON.
   */
  getItem(key: string, isJson: boolean = false): any {
    const item = this.storage.getItem(getLocalStorageKey(key));
    return isJson && item ? JSON.parse(item) : item;
  }

  /**
   * Returns the name of the nth key in storage.
   * @param index - The index of the key.
   * @returns The name of the key at the specified index.
   */
  key(index: number): string | null {
    return this.storage.key(index);
  }

  /**
   * Removes the specified key from storage.
   * @param key - The key to remove.
   */
  removeItem(key: string): void {
    this.storage.removeItem(getLocalStorageKey(key));
  }

  /**
   * Sets the value for the specified key in storage.
   * @param key - The key to set.
   * @param value - The value to set.
   * @param isJson - Indicates if the value should be stored as JSON.
   */
  setItem(key: string, value: any, isJson: boolean = false): void {
    if (isJson) {
      value = JSON.stringify(value);
    }
    this.storage.setItem(getLocalStorageKey(key), value);
  }
}
