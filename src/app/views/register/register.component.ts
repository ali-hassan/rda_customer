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
  submitted = false;
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
  }
  get registerFormControl() {
    return this.aFormGroup.controls;
  }
  get primEmail() {
    return this.aFormGroup.get('email');
  }
  onSubmit() {
    this.submitted = true;
    if (this.aFormGroup.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.aFormGroup.value);
    }
  }
}
