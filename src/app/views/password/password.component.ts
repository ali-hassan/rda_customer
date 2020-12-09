import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'password.component.html'
})
export class PasswordComponent implements OnInit {
  protected aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
