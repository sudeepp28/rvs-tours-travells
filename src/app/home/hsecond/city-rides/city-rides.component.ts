import { Component } from '@angular/core';

@Component({
  selector: 'app-city-rides',
  standalone: false,
  templateUrl: './city-rides.component.html',
  styleUrls: ['./city-rides.component.css']
})
export class CityRidesComponent {
  pickup = '';
  rentalPackage='4hrs 40kms';
  drop = '';
  date = '';
  time = '';
  phone = '';
  name=''
  vehicle='Sedan – Toyota Etios, Maruti Dzire'

  submitForm() {
  const message = `*City Ride Enquiry*:
  *Rental-Package:* ${this.rentalPackage}
*Pickup*: ${this.pickup}
*Drop*: ${this.drop}
*Date*: ${this.date}
*Time*: ${this.time}
*Selected Vehicle*: ${this.vehicle}
*Name:*${this.name}
*Contact*: ${this.phone}`;

  const adminPhone = '918884443249'; // ✅ No '+'
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  alert('Form submitted successfully. Redirecting to WhatsApp.');
  window.open(whatsappUrl, '_blank');

  // Clear form
  this.pickup = '';
  this.drop = '';
  this.date = '';
  this.time = '';
  this.phone = '';
  this.vehicle='Sedan – Toyota Etios, Maruti Dzire';
  this.name=''
  this.rentalPackage=''
}
}
