import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userObj;
  total:number=0;
   count;
   userCartObj;
   products=[];

  constructor(private hc:HttpClient,private us:DataService) { 
    
  }

  ngOnInit(): void {

    
        //get user data from local storage
        this.userObj= localStorage.getItem("username")

        //get userCartObj from API
        this.us.getProductsFromUserCart(this.userObj).subscribe(
          res=>{
            if(res.message==='Cart-empty'){
              this.us.updateDataObservable(0)
            }
            else{
              this.us.updateDataObservable(res.message)
            }
            this.us.dataObservable.subscribe(prodObj=>{
               if(prodObj==0){
                  this.count=0;
               }
               else{
                 this.count=prodObj.products.length;
                 this.amount()
               }
            })
          }
        )

        this.us.dataObservable.subscribe(
          res=>{
    
           
            if(res["message"]==='Cart-empty'){
              alert("User cart is empty")
            }
            else{
              
                this.products=res["products"]
              
            }
          },
          err=>{
            console.log("err in reading cart",err)
            alert("Something went wrong in fetching cart items..")
          }
        )
    
  }

  amount(){
    for (let p of this.products) {
      this.total=this.total+p.price
    }  
  
  }
  }


