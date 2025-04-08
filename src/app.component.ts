import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, RouterOutlet]
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToSecond() {
    this.router.navigate(['/second']);
  }
}
