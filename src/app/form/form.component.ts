import { Component, Input, OnInit, AfterViewInit} from '@angular/core';
import { Form } from './../models/form';
import * as AOS from 'aos';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
@Input() form!: Form;
ngOnInit(): void {
    AOS.init({
      duration: 600, // Global duration for animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }
   ngAfterViewInit(): void {
      console.log("AOS.refresh"); 
      AOS.refresh();
    }
}
