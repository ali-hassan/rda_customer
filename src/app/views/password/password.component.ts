import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomvalidationService } from '../../services/customvalidation.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'password.component.html'
})
export class PasswordComponent implements OnInit {
  protected aFormGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService,
    private titleService: Title,
    private toastr: ToastrService
  ) {
    this.titleService.setTitle("Password - ABL");
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha:          ['', Validators.required],
        password:         ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword:  ['', [Validators.required]],
      },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  get registerFormControl() {
    return this.aFormGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.aFormGroup.value);
      this.toastr.success('Your password has been updated successfully!', 'Success',{
        timeOut: 3000,
      });
      setTimeout(function () {
        window.location.href = 'http://localhost:4200/#/login';
      }, 3000);
    }
  }
}
