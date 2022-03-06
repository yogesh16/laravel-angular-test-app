import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { VimeoUrlPipe } from './components/playlist/vimeo-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    CourseComponent,
    LogoutComponent,
    NavbarComponent,
    HomeComponent,
    StudentCreateComponent,
    StudentEditComponent,
    CourseCreateComponent,
    CourseEditComponent,
    PlaylistComponent,
    VimeoUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
