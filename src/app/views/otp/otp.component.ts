import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'otp.component.html'
})
export class OtpComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle("OTP Verification - ABL");
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      otp:        ['', Validators.required]
    });
  }
  get registerFormControl() {
    return this.aFormGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.aFormGroup.value);
    }
  }
}
