import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Carousel} from '../models/carousel';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() carousel!: Carousel;
}
