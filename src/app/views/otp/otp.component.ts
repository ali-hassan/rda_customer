import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'otp.component.html'
})
export class OtpComponent implements OnInit {
  protected aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
