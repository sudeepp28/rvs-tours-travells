import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AboutData } from '../../aboutData';

@Component({
  selector: 'app-athird',
  standalone:false,
  templateUrl: './athird.component.html',
  styleUrl: './athird.component.css'
})
export class AthirdComponent {
  @Output() open=new EventEmitter()
  data:any=AboutData
  constructor(private router:Router){}
goto(id:string){
  this.router.navigate([`/forms/${id}`])
}
goDettails(id:string){
  this.router.navigate([`/aDetail/${id}`])
}
openPopUp(){
this.open.emit()
}
}
