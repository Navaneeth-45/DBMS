import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MobilesComponent } from '../mobiles/mobiles.component';
import { Mobiles } from '../models/mobile.model';

@Component({
  selector: 'app-mobilesdetails',
  templateUrl: './mobilesdetails.component.html',
  styleUrls: ['./mobilesdetails.component.css'],
  
})
export class MobilesdetailsComponent 
 {


  @Input() productObj:Mobiles;
  constructor(private fsObj:DataService,private router:Router) { }

  mobilesDisplay(id){
    this.router.navigateByUrl('mobiles/'+id)
  }
  

}
