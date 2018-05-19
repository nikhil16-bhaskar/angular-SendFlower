import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    // this.maxDate = new Date();
    // this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    var data = {
      'email': form.value.email,
      'password': form.value.password
    };
    console.log(data);
    this.authService.registerUser(data);
  }

}




