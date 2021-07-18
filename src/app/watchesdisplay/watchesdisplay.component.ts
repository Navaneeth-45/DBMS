import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Watches } from '../models/watches.model';

@Component({
  selector: 'app-watchesdisplay',
  templateUrl: './watchesdisplay.component.html',
  styleUrls: ['./watchesdisplay.component.css']
})
export class WatchesdisplayComponent implements OnInit {

  postObj:Watches;
  constructor(private ar:ActivatedRoute,private fs:DataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of post with this current id
    this.fs.watchesDisplay(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.postObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }
  onProductSelect(productObject){

    //console.log(productObject)
    let username=localStorage.getItem("username")

    let newUserProductObj={username,productObject}

    console.log(newUserProductObj)

   this.fs.sendProductToUserCart(newUserProductObj).subscribe(
     res=>{
       alert(res['message'])
       this.fs.updateDataObservable(res.latestCartObj)
     },
     err=>{
       console.log("err in posting product to cart ",err)
       alert("Something wrong in adding product to cart...")
     }
   )

  }

}

