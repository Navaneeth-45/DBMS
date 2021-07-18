import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  products;
  mySubscription: any;
  searchTerm:string;

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.mySubscription=this.dsObj.getWatches().subscribe(
      res=>{
        this.products=res;
        
      },
      err=>{
        console.log(err)
      }
    );
    
  }

}
