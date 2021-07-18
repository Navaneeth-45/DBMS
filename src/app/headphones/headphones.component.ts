import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {

  products;
  mySubscription: any;
  searchTerm:string;

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.mySubscription=this.dsObj.getHeadphones().subscribe(
      res=>{
        this.products=res;
        
      },
      err=>{
        console.log(err)
      }
    );
    
  }


}
