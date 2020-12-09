import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      recaptcha: new FormControl(null, Validators.required)
    });
  }
}
