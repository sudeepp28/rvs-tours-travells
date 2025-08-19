import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-afirst',
  standalone:false,
  templateUrl: './afirst.component.html',
  styleUrl: './afirst.component.css'
})
export class AfirstComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/afirst.jpg',
    'assets/asecond.jpg',
    'assets/athird.jpg'
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[0];
  intervalId: any;
  animate: boolean = true;
 ngOnInit() {
  this.intervalId = setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];

    // 🔥 restart animation
    this.animate = false;
    setTimeout(() => this.animate = true, 50);
  }, 4000);
}

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
