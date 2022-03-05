import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private isLoggedIn = new BehaviorSubject(false);

    constructor(private http:HttpClient) { }

    toggleLogin(state:boolean):void{
        this.isLoggedIn.next(state);
    }

    status(){
        const user:any = localStorage.getItem('user')
        if(!user){
            console.log("User not logged in!");
            this.isLoggedIn.next(false);
        }

        const userObj = JSON.parse(user);
        var time = new Date().getTime() / 1000;
        if(time < (time + userObj.expires_in)){
            this.isLoggedIn.next(true);
        }else{
            console.log("Session expired");
            this.isLoggedIn.next(false);
        }

        return this.isLoggedIn.asObservable();
    }

    login(email:any, password: any){
        return this.http.post('http://127.0.0.1:8000/api/auth/login',{
            email: email,
            password: password
        })
    }

    register(name: any, email: any, password: any){
        return this.http.post('http://127.0.0.1:8000/api/auth/register',{
            name: name,
            email: email,
            password: password
        })
    }

    logout(){
        const user: any = localStorage.getItem('user');
        const userObj = JSON.parse(user);

        const token = userObj.access_token;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        
        return this.http.post('http://127.0.0.1:8000/api/auth/logout', {}, { headers: headers});
    }
}
