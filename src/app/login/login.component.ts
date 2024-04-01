import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private _loginservice:LoginService,private router:Router){}
  
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl() 
  })

  login() {
    this._loginservice.getLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        localStorage.setItem("instituemanagementsystem-token",data.token);
        alert('loginsuccessfull');
        this.router.navigateByUrl("/dashboard");
        
      },
      (data:any)=>{
        alert('login failed')
      }
    )
  }

}
