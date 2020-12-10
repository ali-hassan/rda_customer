import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomvalidationService} from '../../services/customvalidation.service';
import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  protected aFormGroup: FormGroup;
  protected otpFormGroup: FormGroup;
  submitted = false;
  isButtonVisible = false;
  constructor(
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService,
    private titleService: Title,
    private modalService: BsModalService
  ) {
    this.titleService.setTitle('Register User - ABL');
  }
  modalRef: BsModalRef;

  openModal(template: '../otp/otp.component.html') {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha:    ['', Validators.required],
      fullName:     ['', Validators.required],
      currency:     ['default', Validators.required],
      cnic:         ['', [Validators.required, Validators.minLength(13)]],
      email:        ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      accountType:  ['default', Validators.required]
    });
    this.otpFormGroup = this.formBuilder.group({
      otp:    ['', Validators.required]
    });
  }
  get registerFormControl() {
    return this.aFormGroup.controls;
  }
  get otpFormControl() {
    return this.otpFormGroup.controls;
  }
  get primEmail() {
    return this.aFormGroup.get('email');
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      console.table(this.aFormGroup.value);
    }
    if (this.otpFormGroup.valid) {
      console.table(this.otpFormGroup.value);
    }
  }
  onOtpChange(otp) {
    console.log('Length=');
    console.log(otp);
    console.log(otp.length);
    if (otp.length === 6) {
      console.log(this.otpFormGroup.status);
      this.isButtonVisible = true;
    }
    if (otp.length !== 6) {
      this.isButtonVisible = false;
    }
  }
}
