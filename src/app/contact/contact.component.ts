import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class contactComponent implements OnInit {

  myForm: FormGroup|any;
  userName: FormControl|any;
  password:FormControl|any;

  constructor() { }

  ngOnInit(): void {
    this.userName = new FormControl('',[Validators.required, Validators.minLength(10)]);
    this.password = new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]);
    this.myForm = new FormGroup ({
      'userName':this.userName,
      'password':this.password,
    });
  }

}