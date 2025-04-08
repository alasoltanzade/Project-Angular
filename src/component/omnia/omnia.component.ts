import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabsModule } from 'primeng/tabs';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-omnia',
  standalone: true,
  imports: [
    MegaMenuModule,
    TabsModule,
    AnimateOnScrollModule,
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    ScrollerModule,
    ScrollPanelModule,
    StepperModule,
  ],
  templateUrl: './omnia.component.html',
  styleUrl: './omnia.component.scss',
})
export class OmniaComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  items2!: string[];
  swiper!: Swiper;
  index: any;
  intervalId: any;

  ngOnInit() {
    this.items2 = Array.from({ length: 20 }).map((_, i) => `Item #${i}`);

    this.items = [
      {
        template: 'assets/images/r8Pro/list-light-1.svg',
        label: '',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: '',
              items: [
                { label: 'HomePage' },
                { label: 'Service' },
                { label: 'Blog' },
                { label: 'Blog category' },
              ],
            },
          ],
        ],
      },
    ];
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 4,
      // loop: true,
      effect: 'slide',
      rewind: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    }, 3000);
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
