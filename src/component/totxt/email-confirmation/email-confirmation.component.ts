import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  imports: [RouterLink],
  templateUrl: './email-confirmation.component.html',
  styleUrl: './email-confirmation.component.scss',
})
export class EmailConfirmationComponent {
  constructor(private router: Router) {}

  navigateToEmailConfirmation() {
    this.router.navigate(['/totxt/dashbored']);
  }
}
