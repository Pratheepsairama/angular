import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  
  FormValid = false;
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  onPay(pay:NgForm)
  {
    if (!pay.valid) {
      this.FormValid = true;
      return;
  }
  else{
    this.router.navigate(['home']);
    alert("Payment done");
  }
}
}

