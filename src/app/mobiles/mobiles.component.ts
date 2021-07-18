import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Mobiles } from '../models/mobile.model';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  
  products;
  mySubscription: any;
  searchTerm:string;

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.mySubscription=this.dsObj.getMobiles().subscribe(
      res=>{
        this.products=res;
        
      },
      err=>{
        console.log(err)
      }
    );
    
  }

}
