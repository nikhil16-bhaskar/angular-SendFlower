import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
  constructor(private authService: AuthService) { }

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
  this.authService.login({
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  });
}
}