import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get('http://127.0.0.1:8000/api/course/index', { headers: this.getHeader() });
    }

    delete(id:any){
        return this.http.post('http://127.0.0.1:8000/api/course/delete/'+id, {}, { headers: this.getHeader() });
    }

    add(name:String){
        return this.http.post('http://127.0.0.1:8000/api/course/create', {
            name: name
        }, { headers: this.getHeader() });
    }

    edit(id:String, name:String){
        return this.http.post('http://127.0.0.1:8000/api/course/edit/'+id, {
            name: name
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
