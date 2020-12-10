import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomvalidationService } from '../../services/customvalidation.service';
import { Title } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';
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
    private flashMessage: FlashMessagesService
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
    this.flashMessage.show('Welcome To ABL', { cssClass: 'alert-success', timeout: 5000 });
  }
  showFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To ABL', { cssClass: 'alert-success text-center', timeout: 5000 });
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
