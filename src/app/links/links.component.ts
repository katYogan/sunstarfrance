import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Links } from '../models/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class LinksComponent {
  @Input() links!: Links;
}
