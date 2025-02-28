import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-subsection',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() images: { url: string, title: string, subtitle: string }[] = [];
}