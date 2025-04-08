import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { SelectModule } from 'primeng/select';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-r8pro-service',
  standalone: true,
  imports: [ButtonModule, AccordionModule, SelectModule, MegaMenuModule],
  templateUrl: './r8pro-service.component.html',
  styleUrl: './r8pro-service.component.scss',
})
export class R8proServiceComponent implements OnInit {
  constructor(private router: Router) {}
  items: MegaMenuItem[] | undefined;

  language = [
    { name: 'English' },
    { name: 'Persian' },
    { name: 'Germani' },
    { name: 'Turkey' },
  ];

  ngOnInit() {
    this.items = [
      {
        template: 'assets/images/r8Pro/list-light-1.svg',
        label: 'r8.pro',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'r8.pro',
              items: [
                {
                  label: 'HomePage',
                  command: () => this.router.navigate(['/r8pro']),
                },
                {
                  label: 'Service',
                  command: () => this.router.navigate(['/r8pro-service']),
                },
                {
                  label: 'Blog',
                  command: () => this.router.navigate(['/r8pro-blog']),
                },
                {
                  label: 'Blog category',
                  command: () => this.router.navigate(['/r8pro-blog-category']),
                },
              ],
            },
          ],
        ],
      },
    ];
  }
}
