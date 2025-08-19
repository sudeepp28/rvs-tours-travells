import { Component } from '@angular/core';

@Component({
  selector: 'app-car-rental',
  standalone: false,
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent {
  city = '';
  pickup = '';
  date = '';
  time = '';
  phone = '';
  name=''
  vehicle='Sedan – Toyota Etios, Maruti Dzire'
rentalPackage='4hrs 40kms'
  submitForm() {
    const message = `*Car Rental Enquiry*:
    *Rental-Package:* ${this.rentalPackage}
*City*: ${this.city}
*Pick-Up Location*: ${this.pickup}
*Date*: ${this.date}
*Time*: ${this.time} 
*Name:*${this.name}
*Contact*: ${this.phone}
*selected Vehicle*: ${this.vehicle}`;

    const adminPhone = '918884443249'; // Your admin WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    alert('Form submitted successfully. Redirecting to WhatsApp.');
    window.open(whatsappUrl, '_blank');

    // Clear form after submission
    this.city = '';
    this.pickup = '';
    this.date = '';
    this.time = '';
     this.name='';
    this.phone = '';
    this.rentalPackage='';
    this.vehicle='Sedan – Toyota Etios, Maruti Dzire'
  }
}
