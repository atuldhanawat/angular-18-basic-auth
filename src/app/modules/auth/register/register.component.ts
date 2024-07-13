import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register', // Selector to use this component in templates
  standalone: true, // Indicates this component is standalone
  imports: [CommonModule], // Import CommonModule to use common Angular directives
  templateUrl: './register.component.html', // Path to the HTML template for this component
  styleUrls: ['./register.component.scss'] // Path to the SCSS file for this component's styles
})
export class RegisterComponent {
  // RegisterComponent logic goes here
}
