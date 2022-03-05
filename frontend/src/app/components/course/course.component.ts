import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    constructor(private crsService:CourseService, private router:Router) { }
    courses: any;
    ngOnInit(): void {
        this.getCourses();
    }

    getCourses(){
        this.crsService.get().subscribe((res) => {
            this.courses = res;
        })
    }


    OnCourseDelete(id:any){
        if(confirm("Are you sure to delete course?")){
            this.crsService.delete(id).subscribe((res)=>{
                this.getCourses();
            })
        }
    }

    OnCourseEdit(course:any){
        this.router.navigate(['/course/edit'],{queryParams:{course:JSON.stringify(course)}})
    }

}
