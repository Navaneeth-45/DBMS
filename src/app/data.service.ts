import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mobiles } from './models/mobile.model';
import { Laptops } from './models/laptop.model';
import { Watches } from './models/watches.model';
import { Headphones } from './models/headphones.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userLoginStatus=false;
 //inject http client object
 constructor(private hc:HttpClient) { 
 if(localStorage.getItem('username')!=null){
   this.userLoginStatus=true;
 }
 }

  getMobiles():Observable<Mobiles>{
    return this.hc.get<Mobiles>('http://localhost:3000/mobiles')
  }
  getLaptops():Observable<Laptops>{
    return this.hc.get<Laptops>('http://localhost:3000/laptops')
  }
  getWatches():Observable<Watches>{
    return this.hc.get<Watches>('http://localhost:3000/watches')
  }
  getHeadphones():Observable<Headphones>{
    return this.hc.get<Headphones>('http://localhost:3000/headphones')
  }

  watchesDisplay(id):Observable<Watches>{
      
    return this.hc.get<Watches>('http://localhost:3000/watches/'+id)
  }
  headphonesDisplay(id):Observable<Headphones>{
      
    return this.hc.get<Headphones>('http://localhost:3000/headphones/'+id)
  }

  laptopsDisplay(id):Observable<Laptops>{
      
    return this.hc.get<Laptops>('http://localhost:3000/laptops/'+id)
  }

  mobilesDisplay(id):Observable<Mobiles>{
      
    return this.hc.get<Mobiles>('http://localhost:3000/mobiles/'+id)
  }

  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/register",userObj)
  }

  loginUser(credentials):Observable<any>{
    return  this.hc.post("/user/login",credentials)
   
   }

   dataSource=new BehaviorSubject<any>(0)
   dataObservable=this.dataSource.asObservable();
 
    updateDataObservable(data){
      this.dataSource.next(data)
    }

   sendProductToUserCart(userProductObj):Observable<any>{

    return this.hc.post("/user/add-to-cart",userProductObj)
  }

  getProductsFromUserCart(username):Observable<any>{
    return this.hc.get(`/user/getproducts/${username}`)
  }
  

}
