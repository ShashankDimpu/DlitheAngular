import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  productTypes = ['HR', 'Developer','Designer','Trainee'];
  myForm: FormGroup | any;
  Name: FormControl | any;
  Age: FormControl | any;
  Email: FormControl | any;
  password: FormControl | any;
  designation: FormControl | any;
  Phonenumber: FormControl | any;
  details: any;
  constructor() { }
  getClass(){
    var classList='';
    if(this.details){
       classList = 'fa fa-plus'; 
    }else {
        classList = 'fa fa-minus';
    }
    return classList;
  }
  ngOnInit() {
    this.Name = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.Age = new FormControl('',[Validators.required, Validators.min(18)]);
    this.Email = new FormControl('', Validators.pattern('^^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'));
    this.password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')] );
    this.designation = new FormControl('', Validators.required);
    this.Phonenumber = new FormControl('',Validators.pattern('^((\\+91-?)|0)?[0-9]{10}'));
    this.myForm = new FormGroup({
      'Name': this.Name,
      'Age': this.Age,
      'Email': this.Email,
      'password': this.password,
      'Designation': this.designation,
      'Phone Number': this.Phonenumber
    });
  }
  
}



