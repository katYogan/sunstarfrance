import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ModalComponent
  ],
  providers: [BsModalService],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  interval = 80000;
  noWrap = false; // Set to false to enable infinite looping
  @Input() images: { url: string, title: string, subtitle: string }[] = [];

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModalWithComponent(image: { url: string, title: string, subtitle: string }) {
    const initialState: ModalOptions = {
      initialState: {
        image: image
      }
    };
    this.modalRef = this.modalService.show(ModalComponent, initialState);
  }

  ngAfterViewInit() {
    console.log(this.images);
  }
}