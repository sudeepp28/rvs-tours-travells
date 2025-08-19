import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: false,
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
  pickup = '';
  drop = '';
  date = '';
  time = '';
  phone = '';
  name = '';
  vehicle = 'Sedan – Toyota Etios, Maruti Dzire';
  isRoundTrip = false;

  stops: string[] = [];

  addStop() {
    this.stops.push('');
  }

  removeStop(index: number) {
    this.stops.splice(index, 1);
  }

  trackByIndex(index: number): number {
    return index;
  }

  submitForm() {
    const adminPhone = '918884443249';
    let message = `*Airport Taxi Enquiry*( Round Trip)\n`;

    message += ` *Pick-up Address:* ${this.pickup}\n`;
    this.stops.forEach((stop, idx) => {
      message += ` *Stop ${idx + 1}:* ${stop}\n`;
    });
    message += ` *Drop Address:* ${this.drop}\n`;
    message += ` *Pick-Up Date:* ${this.date}\n`;
    message += ` *Pick-Up Time:* ${this.time}\n`;
    message += ` *Selected Vehicle:* ${this.vehicle}\n`;
    message += ` *Name:* ${this.name}\n`;
    message += ` *Contact:* ${this.phone}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    alert('Form submitted successfully. Redirecting to WhatsApp.');
    window.open(whatsappUrl, '_blank');

    this.pickup = '';
    this.drop = '';
    this.stops = [];
    this.date = '';
    this.time = '';
    this.vehicle = 'Sedan – Toyota Etios, Maruti Dzire';
    this.name = '';
    this.phone = '';
  }
}
