import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Laptops } from '../models/laptop.model';

@Component({
  selector: 'app-laptopsdetails',
  templateUrl: './laptopsdetails.component.html',
  styleUrls: ['./laptopsdetails.component.css']
})
export class LaptopsdetailsComponent  {

  
  constructor(private fsObj:DataService,private router:Router) { }
  @Input() productObj:Laptops;

  laptopsDisplay(id){
    this.router.navigateByUrl('laptops/'+id)
  }
}


