import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Laptops } from '../models/laptop.model';

@Component({
  selector: 'app-laptopsdisplay',
  templateUrl: './laptopsdisplay.component.html',
  styleUrls: ['./laptopsdisplay.component.css']
})
export class LaptopsdisplayComponent implements OnInit {

  postObj:Laptops;
  constructor(private ar:ActivatedRoute,private fs:DataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of post with this current id
    this.fs.laptopsDisplay(id).subscribe(
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
