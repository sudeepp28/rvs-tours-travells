import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  adminPhone: string = '+919964758999';
  prefilledText: string = encodeURIComponent('Hi, I would like to Book A Cab ');
  constructor() { }

  ngAfterViewInit(): void {
  }
  isPopUp=false
  issidebar=false
  openSideBar(){
    this.issidebar=true
  }
  closeSidebar(){
this.issidebar=false
  }
  openPopUp(){
    this.isPopUp=true
   
  }
  closePopUp(){
    this.isPopUp=false
     this. closeSidebar()
  }
}
