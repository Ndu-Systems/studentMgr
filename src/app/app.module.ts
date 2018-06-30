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
import { CourseDetailsService } from "./admin/course-details/course-details.service";
import { StudentService } from "./admin/students/student-list/student.service";
import { SelectService } from "./shared/select.service";
import { LectureService } from "./admin/lecture/lecture.service";
import { LectureSubjectsService } from "./lecture/lecture-subjects/lecture-subjects.service";
import { SubjectStudentsService } from "./lecture/subject-students/subject-students.service";
import { LogoutComponent } from './logout/logout.component';
import { SutdentSubjectsService } from "./student/student-subjects/sutdent-subjects.service";
import { GetSubjectPipe } from './lecture/test-section/test-list/get-subject.pipe';
import { TestCentreService } from "./lecture/test-section/add-test/test-centre.service";
import { ForgotPasswordService } from "./forgot-password/forgot-password.service";
import { TokenService } from "./shared/token.service";
import { AddSubjectForStudentService } from "./admin/students/add-subject-for-student/add-subject-for-student.service";
import { StudentCourseSubjectService } from "./admin/students/student-course-subject/student-course-subject.service";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavUserComponent,
    StudentListComponent,
    ToggleUserMenuComponent,
    GetSubjectPipe,
    LogoutComponent
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
    SutdentSubjectsService,
    TestCentreService,
    ForgotPasswordService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
