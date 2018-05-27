import { CourseDetailsService } from './course-details/course-details.service';
import { UserDataService } from './shared/services/user-data.service';
import { EmailService } from './shared/services/email.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './register/register.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResetUserService } from './shared/reset-user.service';
import { LoginService } from './login/login.service';
import { NavUserComponent } from './nav-user/nav-user.component';
import { AddService } from './shared/services/add.service';
import { StudentListComponent } from './student-list/student-list.component';
import { SelectService } from './shared/select.service';
import { StudentService } from './student-list/student.service';
import { StudentCourseSubjectService } from './student-course-subject/student-course-subject.service';


@NgModule({
  declarations: [
    AppComponent,routingComponents,
    NavUserComponent,
    StudentListComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterService,LoginService,EmailService, UserDataService,ResetUserService,AddService,SelectService,StudentService,CourseDetailsService,StudentCourseSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
