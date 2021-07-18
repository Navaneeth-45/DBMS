import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Watches } from '../models/watches.model';

@Component({
  selector: 'app-watchesdetails',
  templateUrl: './watchesdetails.component.html',
  styleUrls: ['./watchesdetails.component.css']
})
export class WatchesdetailsComponent  {

  constructor(private fsObj:DataService,private router:Router) { }
  @Input() productObj:Watches;

  watchesDisplay(id){
    this.router.navigateByUrl('watches/'+id)
  }
}
