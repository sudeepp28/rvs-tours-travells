import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
 standalone:false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 email: string = 'rvscab@gmail.com';
Registered_Office=' NEAR CHOWDESHWARI STREET, 640/372-406,KRISHNAPPA BUILDING, 2ND MAIN ROAD, VARTHUR,BANGALORE, Bengaluru (Bangalore) Urban, Karnataka, 560087'


date=new Date()
year=this.date.getFullYear()

below=`@${this.year} RVS Tours & Travels.  All Rights Reserved`
adminPhone1: string = '8884443249'
// adminPhone2: string = '9916788688'
}


