import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router:Router, private auth:AuthenticationService) { }

    ngOnInit(): void {
        this.auth.status().subscribe((res)=>{
            if(res){
                this.router.navigate(['/student']);
            }
        })
    }

    onSubmit(form: NgForm) {
        const name = form.value.name;
        const email = form.value.email;
        const password = form.value.password;
        
        this.auth.register(name, email, password).subscribe((res:any)=>{
            this.router.navigate(['/login'])
        })
    }
}
