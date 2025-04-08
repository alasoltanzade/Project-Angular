import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  navigateToEmailConfirmation() {
    this.router.navigate(['/totxt/email-confirmation']);
  }
}
