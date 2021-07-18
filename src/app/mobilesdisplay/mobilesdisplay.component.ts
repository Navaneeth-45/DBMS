import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Mobiles } from '../models/mobile.model';

@Component({
  selector: 'app-mobilesdisplay',
  templateUrl: './mobilesdisplay.component.html',
  styleUrls: ['./mobilesdisplay.component.css']
})
export class MobilesdisplayComponent implements OnInit {

  postObj:Mobiles;
  constructor(private ar:ActivatedRoute,private fs:DataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of post with this current id
    this.fs.mobilesDisplay(id).subscribe(
      obj=>{
        this.postObj=obj;
       // console.log(this.postObj)
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
