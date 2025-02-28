import { Component, Input } from '@angular/core';
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
}
