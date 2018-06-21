import { UserDataService } from "./shared/services/user-data.service";
import { EmailService } from "./shared/services/email.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterService } from "./register/register.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ResetUserService } from "./shared/reset-user.service";
import { LoginService } from "./login/login.service";
import { NavUserComponent } from "./nav-user/nav-user.component";
import { AddService } from "./shared/services/add.service";
import { ToggleUserMenuComponent } from "./toggle-user-menu/toggle-user-menu.component";
import { StudentListComponent } from "./admin/students/student-list/student-list.component";
import { StudentCourseSubjectService } from "./admin/student-course-subject/student-course-subject.service";
import { AddSubjectForStudentService } from "./admin/add-subject-for-student/add-subject-for-student.service";
import { CourseDetailsService } from "./admin/course-details/course-details.service";
import { StudentService } from "./admin/students/student-list/student.service";
import { SelectService } from "./shared/select.service";
import { LectureService } from "./admin/lecture/lecture.service";
import { LectureSubjectsService } from "./lecture/lecture-subjects/lecture-subjects.service";
import { SubjectStudentsService } from "./lecture/subject-students/subject-students.service";
import { LogoutComponent } from './logout/logout.component';
import { SutdentSubjectsService } from "./student/student-subjects/sutdent-subjects.service";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavUserComponent,
    StudentListComponent,
    ToggleUserMenuComponent
,
    LogoutComponent,
    ForgotPasswordComponent
],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    RegisterService,
    StudentCourseSubjectService,
    LoginService,
    EmailService,
    AddSubjectForStudentService,
    UserDataService,
    ResetUserService,
    AddService,
    SelectService,
    StudentService,
    CourseDetailsService,
    LectureService,
    LectureSubjectsService,
    SubjectStudentsService,
    SutdentSubjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
