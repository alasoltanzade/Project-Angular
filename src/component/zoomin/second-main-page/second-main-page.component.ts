import { Component, OnInit, OnDestroy } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-main-page',
  standalone: true,
  templateUrl: './second-main-page.component.html',
  styleUrl: './second-main-page.component.scss'
})
export class SecondMainPageComponent implements OnInit, OnDestroy {
  private currentIndex = 0;
  private cards: NodeListOf<HTMLElement> | null = null;
  private interval: any;
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      youtube: ['', [Validators.required, Validators.pattern('https?://.+')]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]],
    });
  }

  ngOnInit(): void {
    this.cards = document.querySelectorAll('.gallery div');
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('Form submitted successfully!');
    }
  }

  nextSlide(): void {
    if (this.cards) {
      this.cards.forEach((card, index) => {
        card.style.animation = 'none'; // حذف انیمیشن قبلی
        if (index === this.currentIndex) {
          card.style.animation = 'slide 1s ease-in-out forwards';
        }
      });

      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // swiper: SwiperOptions = {
  //   spaceBetween: 30,
  //     centeredSlides: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   };
  


}
