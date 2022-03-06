import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    loggedIn: boolean = false;
    constructor(private router: Router, private auth: AuthenticationService) { }

    ngOnInit(): void {
        this.auth.status().subscribe((res) => {
            this.loggedIn = res;
            if(!this.loggedIn){
                this.router.navigate(['/login'])
            }
        })
    }

}
