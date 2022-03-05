import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    constructor(private stdService:StudentService, private router:Router) { }
    students:any;
    ngOnInit(): void {
        this.getStudents();
    }

    getStudents(){
        this.stdService.get().subscribe((res)=>{
            this.students = res;
        })
    }

    OnStudentDelete(id:any){
        if(confirm("Are you sure to delete student?")){
            this.stdService.delete(id).subscribe((res)=>{
                console.log(res);
                this.getStudents();
            })
        }
    }

    OnStudentEdit(student:any){
        this.router.navigate(['/student/edit'],{queryParams:{student:JSON.stringify(student)}})
    }
}
