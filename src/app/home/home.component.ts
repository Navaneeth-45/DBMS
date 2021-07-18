import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mobileDetails(){
    this.router.navigateByUrl("/mobiles")
  }
  laptopDetails(){
    this.router.navigateByUrl("/laptops")
  }
  watchDetails(){
    this.router.navigateByUrl("/watches")
  }

  headphonesDetails(){
    this.router.navigateByUrl("/headphones")
  }



}
