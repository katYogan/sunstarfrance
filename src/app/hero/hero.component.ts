import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { CarouselComponent } from '../carousel/carousel.component';
import { Carousel } from '../models/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() hero!: Hero;
  heroCarousel!: Carousel;
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
    console.log(this.hero.imageUrl); // Log the image URL to the console
    if (this.hero?.images) {
      this.heroCarousel = new Carousel(this.hero.images);
    }
  }
}
