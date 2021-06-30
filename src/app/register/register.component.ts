import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerData } from '../modelRegistration/customerData';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FormValid = false;
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  onRegistration(registration:NgForm)
  {
    if (!registration.valid) {
      this.FormValid = true;
      return;
  }
  else{
    this.router.navigate(['registrationdone']);
  }
}
}
