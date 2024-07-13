import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  title = 'angular-basic';
  
  // BehaviorSubject to hold the browser platform status
  static isBrowserPlatform = new BehaviorSubject<boolean>(false);

  /**
   * Constructor for AppComponent
   * @param platformId - The platform ID injected to determine if the application is running in the browser
   */
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Update the BehaviorSubject with the platform status
    AppComponent.isBrowserPlatform.next(isPlatformBrowser(this.platformId));
  }
}
