import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  protected aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  showOtp() {
    document.getElementById('otp').style.display = 'block';
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
