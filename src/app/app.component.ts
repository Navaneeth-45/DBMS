import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping';
  constructor(public us:DataService,private router:Router){}
     


onSignup(userObj:any){
 
  console.log(userObj)
  this.us.createUser(userObj).subscribe(
    res=>{
      if(res.message==="User created"){
        alert("User created")
        
      }
      else{
        alert(res.message)
      }
    },
    err=>{
      console.log(err)
      alert("Something went wrong in user creation")
    }
  )
  }
  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }


  userObj;
   count;
   userCartObj;
   products=[];



  ngOnInit(): void {

    
        //get user data from local storage
        this.userObj= JSON.parse(localStorage.getItem("userObj"))

        //get userCartObj from API
        this.us.getProductsFromUserCart(this.userObj.username).subscribe(
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
}
