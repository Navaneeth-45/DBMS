import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Headphones } from '../models/headphones.model';

@Component({
  selector: 'app-headphonesdetails',
  templateUrl: './headphonesdetails.component.html',
  styleUrls: ['./headphonesdetails.component.css']
})
export class HeadphonesdetailsComponent  {
  constructor(private fsObj:DataService,private router:Router) { }
  @Input() productObj:Headphones;

  headphonesDisplay(id){
    this.router.navigateByUrl('headphones/'+id)
  }
}
