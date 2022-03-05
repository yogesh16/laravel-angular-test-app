import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get('http://127.0.0.1:8000/api/student/index', { headers: this.getHeader() });
    }

    delete(id:any){
        return this.http.post('http://127.0.0.1:8000/api/student/delete/'+id, {}, { headers: this.getHeader() });
    }

    add(name:String, sclass:String, gender: String, courses: any){
        return this.http.post('http://127.0.0.1:8000/api/student/create', {
            name: name,
            student_class: sclass,
            gender: gender,
            courses: courses
        }, { headers: this.getHeader() });
    }

    edit(id:String, name:String, sclass:String, gender: String, courses: any){
        return this.http.post('http://127.0.0.1:8000/api/student/edit/'+id, {
            name: name,
            student_class: sclass,
            gender: gender,
            courses: courses
        }, { headers: this.getHeader() });
    }

    getHeader(){
        const user: any = localStorage.getItem('user');
        const userObj = JSON.parse(user);

        const token = userObj.access_token;
        return new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
    }
}
