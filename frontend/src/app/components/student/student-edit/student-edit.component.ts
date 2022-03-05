import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

    constructor(private route:ActivatedRoute, private crsService:CourseService,private router: Router, private stdService: StudentService) { }
    student:any;
    courses:any;
    public name="";
    public stdClass = "";
    public gender = "";
    public selectedCrs= [1,4];

    ngOnInit(): void {
        this.crsService.get().subscribe((res)=>{
            this.courses = res;
        })
        this.route.queryParams.subscribe((params:any)=>{
            this.student = JSON.parse(params.student);
            this.name = this.student.name;
            this.stdClass = this.student.student_class;
            this.gender = this.student.gender;
            var en = this.student.enrollment;
            var cr = [];
            for(let i=0; i<en.length; i++){
                cr.push(en[i].course.id);
            }
            this.selectedCrs = cr;
            console.log(this.selectedCrs);
        })
    }

    onSubmit(stdEditF: NgForm) {
        var name = stdEditF.value.name;
        var sClass = stdEditF.value.class;
        var gender = stdEditF.value.gender;
        var courses = stdEditF.value.courses;

        this.stdService.edit(this.student.id, name, sClass, gender, courses).subscribe((res)=>{
            this.router.navigate(['/student']);
        });
    }

}
