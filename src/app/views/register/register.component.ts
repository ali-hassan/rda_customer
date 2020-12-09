import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomvalidationService} from '../../services/customvalidation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService
  ) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha:    ['', Validators.required],
      fullName:     ['', Validators.required],
      currency:     ['', Validators.required],
      cnic:         ['', Validators.required],
      email:        ['', Validators.required],
      accountType:  ['', Validators.required]
    });
  }
  get registerFormControl() {
    return this.aFormGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.aFormGroup.value);
    }
  }
  showOtp() {
    document.getElementById('otp').style.display = 'block';
  }
}
