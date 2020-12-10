import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle("Forgot Password - ABL");
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      email:      ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      recaptcha:  ['', Validators.required]
    });
  }
  get passwordFormControl() {
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
