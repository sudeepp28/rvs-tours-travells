import { Component } from '@angular/core';

@Component({
  selector: 'app-outstation',
  standalone: false,
  templateUrl: './outstation.component.html',
  styleUrl: './outstation.component.css'
})
export class OutstationComponent {
  isRoundTrip: boolean = true;

  // Form data fields
  pickupCity = '';
  dropCity = '';
  pickupDate = '';
  pickupTime = '';
  name=''
  contact = '';
  returnDate = '';
  vehicle='Sedan – Toyota Etios, Maruti Dzire'

 submitForm() {
  const adminPhone = '918884443249'; // Replace with your WhatsApp number

  let message = `*Outstation Cab Enquiry* (${this.isRoundTrip ? 'Round Trip' : 'One Way'})\n`;
  message += ` *Pickup City:* ${this.pickupCity}\n`;
  message += ` *Drop City:* ${this.dropCity}\n`;
  message += ` *Pickup Date:* ${this.pickupDate}\n`;
  message += ` *Pickup Time:* ${this.pickupTime}\n`;
   message += ` *Selected Vehicle:* ${this.vehicle}\n`;
   message += ` *Name:* ${this.name}\n`;
  message += ` *Contact:* ${this.contact}\n`;

  if (this.isRoundTrip && this.returnDate) {
    message += ` *Return Date:* ${this.returnDate}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  // ✅ Alert user
  alert('Form submitted successfully. Redirecting to WhatsApp.');

  // ✅ Open WhatsApp
  window.open(whatsappUrl, '_blank');

  // ✅ Clear form
  this.pickupCity = '';
  this.dropCity = '';
  this.pickupDate = '';
  this.pickupTime = '';
  this.name='';
  this.contact = '';
  this.returnDate = '';
  this.vehicle='Sedan – Toyota Etios, Maruti Dzire'
  this.isRoundTrip = false;
}

}
