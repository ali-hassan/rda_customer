import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor() { }

  showOtp() {
    document.getElementById('otp').style.display = 'block';
  }
}
