import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private auth:AuthenticationService, private router:Router) { }

    ngOnInit(): void {
    }

    logout(){
        this.auth.logout().subscribe((res) => {
            console.log(res);
            localStorage.removeItem('user');
            this.auth.toggleLogin(false);
            this.router.navigate(['/login'])
        });
    }

}
