import { Component,Input,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../models/section';
import { SliderComponent } from '../slider/slider.component';
import {SubsectionComponent} from '../subsection/subsection.component';
import { FormComponent } from '../form/form.component';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-section',
  imports: [
    CommonModule, 
    SliderComponent,
    SubsectionComponent,
    FormComponent,
    LinksComponent
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
@Input() section!: Section;
getComponent(component: any) {
  return component;
}


// ngAfterViewInit(): void {
//   this.startAutoplay();
// }

// startAutoplay(): void {
//   const imagesInner = document.querySelector('.images-inner') as HTMLElement;
//   const slides = document.querySelectorAll('.image-slide') as NodeListOf<HTMLElement>;
//   let currentIndex = 0;

//   setInterval(() => {
//     currentIndex++;
//     imagesInner.style.transition = 'transform 1s ease-in-out';
//     imagesInner.style.transform = `translateX(-${currentIndex * 100}%)`;

//     if (currentIndex === slides.length - 1) {
//       setTimeout(() => {
//         imagesInner.style.transition = 'none';
//         imagesInner.style.transform = 'translateX(0)';
//         currentIndex = 0;
//       }, 1000); // Match the transition duration
//     }
//   }, 4000); // Change slide every 4 seconds
// }
}
