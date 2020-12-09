import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {
  protected aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
