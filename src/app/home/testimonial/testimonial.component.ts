import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone:false,
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials = [
     {
      text:'We used Nava Cabs for a corporate event in Bangalore. Their service was top-notch — punctual pickups, professional drivers, and neatly maintained vehicles. Highly recommended for office travel!',
      name: "Meenakshi Iyer – Chennai, Tamil Nadu",
      image: "assets/logo (5).jpg"
    },
     {
      text:'Booked an outstation trip to Coorg with Nava Cabs and it was an excellent experience. The driver was polite, the car was clean, and the entire journey was smooth. Will definitely choose them again!',
      name: " Vishal Reddy – Hyderabad, Telangana",
      image: "assets/logo (1).jpg"
    },
     {
      text:'Had a seamless airport pickup and drop in Bangalore. Driver was on time, and the booking process was hassle-free. Great service and transparent pricing.',
      name: " Vijeta Sharma – Kochi, Kerala",
      image: "assets/logo (3).jpg"
    },
    {
      text:"I’ve used Nava Cabs multiple times for business trips in Bangalore. Their monthly corporate cab package is very convenient and cost-effective. Always on time and reliable.",
      name: "Sandeep Nair – Trivandrum, Kerala",
      image: "assets/logo (2).jpg"
    },
    {
      text:'Traveled with my family from Bangalore to Ooty. The Ertiga we booked was spacious and comfortable. The driver was friendly and knew the route well. A safe and relaxing journey for all of us.',
      name: "Aarti Deshpande – Pune, Maharashtra",
      image: "assets/logo (4).jpg"
    },
     {
      text:'We took a rental for a 5-day South India temple tour. Nava Cabs customized the itinerary as per our needs and the Innova Crysta provided was in perfect condition. Truly a spiritual and stress-free journey.',
      name: "Rohit Sharma – Jaipur, Rajasthan",
      image: "assets/logo.jpg"
    }
  ];

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

 nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  this.resetAutoplay();
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  this.resetAutoplay();
}

goToSlide(index: number) {
  this.currentSlide = index;
  this.resetAutoplay();
}
resetAutoplay() {
  clearInterval(this.interval); // stop current interval
  this.startAutoplay();         // start new interval
}


  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  touchStartX = 0;
touchEndX = 0;

handleTouchStart(event: TouchEvent) {
  this.touchStartX = event.changedTouches[0].screenX;
}

handleTouchEnd(event: TouchEvent) {
  this.touchEndX = event.changedTouches[0].screenX;
  this.handleSwipeGesture();
}

handleSwipeGesture() {
  const deltaX = this.touchEndX - this.touchStartX;

  // Minimum swipe distance threshold
  const minSwipeDistance = 50;

  if (deltaX > minSwipeDistance) {
    // Swiped right → previous slide
    this.prevSlide();
  } else if (deltaX < -minSwipeDistance) {
    // Swiped left → next slide
    this.nextSlide();
  }
}
}
