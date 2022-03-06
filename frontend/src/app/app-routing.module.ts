import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "student", component: StudentComponent },
    { path: "student/create", component: StudentCreateComponent},
    { path: "student/edit", component: StudentEditComponent},
    { path: "course", component: CourseComponent },
    { path: "course/create", component: CourseCreateComponent},
    { path: "course/edit", component: CourseEditComponent},
    { path: "logout", component: LogoutComponent },
    { path: "playlist", component: PlaylistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
