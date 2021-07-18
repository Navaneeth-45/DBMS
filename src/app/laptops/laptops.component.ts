import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Mobiles } from '../models/mobile.model';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  products;
  mySubscription: any;
  searchTerm:string;

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.mySubscription=this.dsObj.getLaptops().subscribe(
      res=>{
        this.products=res;
        
      },
      err=>{
        console.log(err)
      }
    );
    
  }

}
