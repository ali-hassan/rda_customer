// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
}
