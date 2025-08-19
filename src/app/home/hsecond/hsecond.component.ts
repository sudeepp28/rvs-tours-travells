import { Component } from '@angular/core';

@Component({
  selector: 'app-hsecond',
  standalone:false,
  templateUrl: './hsecond.component.html',
  styleUrl: './hsecond.component.css'
})
export class HsecondComponent {
 activeForm: string = 'airport';

  selectForm(formName: string) {
    this.activeForm = formName;
  }
}
