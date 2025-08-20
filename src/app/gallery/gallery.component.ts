import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone:false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: string[] = [
    'assets/gallery1.jpeg',
    'assets/gallery2.jpeg',
    'assets/gallery3.jpeg',
    'assets/gallery4.jpeg',
    'assets/gallery5.jpeg',
    'assets/gallery6.jpeg',
    'assets/gallery7.jpeg',
    'assets/gallery8.jpeg',
    'assets/gallery9.jpeg',
    'assets/gallery10.jpeg',
    'assets/gallery11.jpeg',
    'assets/gallery12.jpeg',
    'assets/gallery13.jpeg',
    'assets/gallery14.jpeg',
    'assets/gallery15.jpeg',
    'assets/gallery16.jpeg',
    'assets/gallery17.jpeg',
    'assets/gallery18.jpeg',
    'assets/gallery19.jpeg',
    'assets/gallery20.jpeg',
    'assets/gallery21.jpeg',
    'assets/gallery22.jpeg',
    'assets/gallery23.jpeg',
    'assets/gallery24.jpeg',
    'assets/gallery25.jpeg',
    'assets/gallery26.jpeg',
  ];
  lightboxOpen = false;
  currentIndex = 0;

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
}
