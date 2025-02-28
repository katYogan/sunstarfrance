import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../models/footer';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
 @Input() footer!: Footer;
 currentYear: number;
 firstColumnUrls: { id: string, name: string }[] = [];
 secondColumnUrls: { id: string, name: string }[] = [];

 constructor() {
  this.currentYear = new Date().getFullYear();
}

ngOnInit(): void {
  this.splitUrls();
}

splitUrls(): void {
  const half = Math.ceil(this.footer.urls.length / 2);
  this.firstColumnUrls = this.footer.urls.slice(0, half);
  this.secondColumnUrls = this.footer.urls.slice(half);
  console.log(1,this.firstColumnUrls);
  console.log(this.secondColumnUrls);
}

}


