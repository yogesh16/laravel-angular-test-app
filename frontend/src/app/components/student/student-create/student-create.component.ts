import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-student-create',
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

    constructor(private stdService:StudentService, private crsService:CourseService, private router:Router) { }

    courses:any;

    ngOnInit(): void {
        this.crsService.get().subscribe((res)=>{
            this.courses = res;
        })
    }


    onSubmit(form: NgForm) {
        const name = form.value.name;
        const sClass = form.value.class;
        const gender = form.value.gender;
        const courses = form.value.courses;
        
        this.stdService.add(name, sClass, gender, courses).subscribe((res:any)=>{
            this.router.navigate(['/student'])
        })
    }
}
