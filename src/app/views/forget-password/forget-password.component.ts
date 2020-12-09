import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      email:      ['', [Validators.required, Validators.email]],
      recaptcha:  ['', Validators.required]
    });
  }
  get passwordFormControl() {
    return this.aFormGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.aFormGroup.value);
    }
  }
}
