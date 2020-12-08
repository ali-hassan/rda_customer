import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'password.component.html'
})
export class RegisterComponent {

  constructor() { }

  showOtp() {
    document.getElementById('password').style.display = 'block';
  }
}
