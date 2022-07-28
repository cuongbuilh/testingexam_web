import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: any;
  errorMessage: any;
  formdata = {
    name: '',
    email: '',
    password: '',
  };
  submit = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
