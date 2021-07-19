import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  //inject UserService obj
  constructor(private us:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(userCredentials){
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="successful"){
          //save token to localstorage
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",userCredentials.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
  //update userloginstatus
  this.us.userLoginStatus=true;
          //navigate to user profile
          this.router.navigateByUrl('/home')
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }
}
