import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapButtonTxt! : string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonTxt = 'Snap';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if(this.userHasSnapped) {
      this.unSnap();
    } else {
    this.snap();
    }
  }

  unSnap(): void {
    this.faceSnap.removeSnap();
    this.snapButtonTxt = 'UnSnap :(';
    this.userHasSnapped = false;
  }

  snap(): void {
    this.faceSnap.addSnap();
    this.snapButtonTxt = 'Snap Yessss :)';
    this.userHasSnapped = true;
  }

}
