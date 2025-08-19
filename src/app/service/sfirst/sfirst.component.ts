import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sfirst',
 standalone:false,
  templateUrl: './sfirst.component.html',
  styleUrl: './sfirst.component.css'
})
export class SfirstComponent {
  @Output() open=new EventEmitter()
openPopup(){
  this.open.emit()
}
}
