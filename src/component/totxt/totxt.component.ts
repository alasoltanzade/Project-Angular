import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-totxt',
  imports: [],
  templateUrl: './totxt.component.html',
  styleUrl: './totxt.component.scss',
})
export class TOTXTComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/totxt/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/totxt/register']);
  }
}
