import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle("Profile User - ABL");
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      otp:    [''],
      username:    [''],
      address: [],
      city: [],
      country: [],
      password: []
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

