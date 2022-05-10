import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Email: FormControl | any;
  password: FormControl | any;

  constructor() { }

  ngOnInit(): void {
    this.Email = new FormControl('', Validators.pattern('^^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'));
    this.password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')] );
  }

}
