import { Component } from '@angular/core';

@Component({
  selector: 'app-airport-taxi',
 standalone:false,
  templateUrl: './airport-taxi.component.html',
  styleUrl: './airport-taxi.component.css'
})
export class AirportTaxiComponent {
 pickup = '';
 
  date = '';
  time = '';
  phone = '';
  name='';
  Flight='';
  trip='Pick up from Airport';
  vehicle='Sedan – Toyota Etios, Maruti Dzire';
  Terminal='Terminal 1'

 submitForm() {
  const adminPhone = '919964758999'; // Replace with your WhatsApp number

  let message = `*Airport Taxi Enquiry*(${this.isRoundTrip ? 'Round Trip' : 'One Way'})\n`;

  if (!this.isRoundTrip && this.trip) {
    message += ` *Trip:* ${this.trip}\n`;
  }

  message += ` *Terminal:* ${this.Terminal}\n`;
  message += ` *Address:* ${this.pickup}\n`;

  // Flight number logic
  if (
    (this.isRoundTrip && this.Flight) ||
    (!this.isRoundTrip && this.trip === 'Pick up from Airport' && this.Flight)
  ) {
    message += ` *Flight No:* ${this.Flight}\n`;
  }

  message += ` *Pick-Up Date:* ${this.date}\n`;
  message += ` *Pick-Up Time:* ${this.time}\n`;
  message += ` *Selected Vehicle:* ${this.vehicle}\n`;
  message += ` *Name:* ${this.name}\n`;
  message += ` *Contact:* ${this.phone}\n`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  alert('Form submitted successfully. Redirecting to WhatsApp.');
  window.open(whatsappUrl, '_blank');

  // Clear form
  this.trip='Pick up from Airport';;
  this.Terminal = 'Terminal 1';
  this.pickup = '';
  this.Flight = '';
  this.date = '';
  this.time = '';
  this.vehicle = 'Sedan – Toyota Etios, Maruti Dzire';
  this.name = '';
  this.phone = '';
  this.isRoundTrip = false;
}
isRoundTrip:boolean=false
}
