import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  protected loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle("Login User - ABL");
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:   [null, [Validators.required]],
      password:   [null, [Validators.required, Validators.minLength(8)]],
      recaptcha:  [null, Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.loginForm.value);
    }
  }
}
