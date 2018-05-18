import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
  constructor(private authService: AuthService, private http:HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email:new FormControl('',{
        validators:[Validators.required,Validators.required]
      }),
      password: new FormControl('',{
        validators: [Validators.required] })
      
    });
  }
onSubmit (form: NgForm){
   
  let data = {
       "email" : form.value.email,
       "password" : form.value.password
  };
  this.http.post('http://localhost:3000/api/checkLogin', data, { observe: 'response' })
  .subscribe(response => {
    if(response.body != null)
    {
      console.log(response.body);
      this.authService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      });
    this.authService.registerId(response.body);
    }
    else
    {
      alert("Sign up first");
    }
    console.log(response);
  });
}
}