import {Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'

})
export class LoginComponent implements OnInit {
  protected aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
