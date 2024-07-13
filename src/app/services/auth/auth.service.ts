import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { LocalstorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Constructor for AuthService
   * @param http - HTTP client for making HTTP requests
   * @param router - Angular router for navigation
   * @param localstorageService - Service for local storage operations
   */
  constructor(
    private http: HttpClient,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}

  /**
   * Logs in the user
   * @param data - The login data (username and password)
   * @returns {Observable<any>} - Observable of the HTTP response
   */
  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  /**
   * Logs out the user by removing authentication data from local storage
   * and navigating to the sign-in page
   */
  logout(): void {
    this.localstorageService.removeItem('auth_data');
    this.router.navigateByUrl('/signin');
  }

  /**
   * Refreshes the authentication token
   * @param data - The refresh token data
   * @returns {Observable<any>} - Observable of the HTTP response
   */
  refreshToken(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/refresh`, data);
  }

  /**
   * Checks if the user is logged in
   * @returns {boolean} - True if the user is logged in, otherwise false
   */
  isLogged(): boolean {
    return !!this.localstorageService.getItem('auth_data');
  }

  /**
   * Sets the authentication data in local storage
   * @param authData - The authentication data to store
   */
  setAuthData(authData: string): void { // Updated method name to camelCase
    this.localstorageService.setItem('auth_data', authData);
  }

  /**
   * Retrieves the authentication token from local storage
   * @returns {string} - The authentication token
   */
  getToken(): string {
    const authData = this.localstorageService.getItem('auth_data', true);
    return authData ? authData.token : '';
  }

  /**
   * Retrieves the refresh token from local storage
   * @returns {string} - The refresh token
   */
  getRefreshToken(): string {
    const authData = this.localstorageService.getItem('auth_data', true);
    return authData ? authData.refreshToken : '';
  }
}
