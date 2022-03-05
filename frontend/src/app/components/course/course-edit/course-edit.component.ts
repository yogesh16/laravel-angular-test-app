import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-course-edit',
    templateUrl: './course-edit.component.html',
    styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

    constructor(private route:ActivatedRoute, private router: Router, private service: CourseService) { }
    course:any;
    public name="";

    ngOnInit(): void {
        this.route.queryParams.subscribe((params:any)=>{
            this.course = JSON.parse(params.course);
            this.name = this.course.name;
        });
    }

    onSubmit(form: NgForm) {
        var name = form.value.name;

        this.service.edit(this.course.id, name).subscribe((res)=>{
            this.router.navigate(['/course']);
        });
    }

}
