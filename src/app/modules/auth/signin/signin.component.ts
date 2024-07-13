import { AuthService } from '../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-signin', // Selector to use this component in templates
  standalone: true, // Indicates this component is standalone
  imports: [CommonModule, ReactiveFormsModule], // Import CommonModule and ReactiveFormsModule for form handling
  templateUrl: './signin.component.html', // Path to the HTML template for this component
  styleUrls: ['./signin.component.scss'], // Path to the SCSS file for this component's styles
})
export class SigninComponent {
  // FormGroup for the sign-in form
  authForm = new FormGroup({
    // FormControl for the username field with a required validator
    username: new FormControl('', [Validators.required]),
    // FormControl for the password field with a minimum length validator
    password: new FormControl('', [Validators.minLength(8)]),
  });

  /**
   * Constructor for SigninComponent
   * @param authService - Service for authentication-related operations
   * @param router - Angular router for navigation
   * @param localstorageService - Service for local storage operations
   */
  constructor(
    private authService: AuthService, 
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}

  /**
   * Handles form submission
   * If the form is valid, it attempts to log in the user,
   * stores the authentication data in local storage,
   * and navigates to the home page
   */
  handleSubmit() {
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value).subscribe((res) => {
        this.localstorageService.setItem('auth_data', res,true);
        this.router.navigateByUrl('/home');
      });
    }
  }
}
