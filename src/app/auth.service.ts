import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    // private user: User;
    private user: User;
    private id;
    constructor(private router: Router, private http: HttpClient) { }
    public registerUser(data) {
        this.user = data;
        console.log(this.user);
        this.http.post('http://localhost:3000/api/addClient', data, { observe: 'response' })
            .subscribe(response => {
                let status = response.status; 
                console.log("Body " + response.body);
                if (response.body == null){
                    // alert("User Already exists");
                    swal("User Already Exists","","error"); }
                else {
                    console.log(response.body);
                    this.id = response.body;
                    this.authChange.next(true);
                    this.router.navigate(['/sent-flowers']);
                }
            }, error => {
                alert(`Error asds is there ${error.error.message}`);
                this.user = null;
            });
     
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            password: authData.password
        };
        this.authChange.next(true);
        this.router.navigate(['/sent-flowers']);
    }

    registerId(clientId) {
        this.id = clientId;
        console.log(clientId);
    }
    getId() {
        return this.id;
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }
}