import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

    constructor(private service:CourseService, private router:Router) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const name = form.value.name;

        this.service.add(name).subscribe((res: any) => {
            this.router.navigate(['/course'])
        })
    }
}
