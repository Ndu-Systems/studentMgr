import { FinacailReportsComponent } from './admin/accounting/finacail-reports/finacail-reports.component';
import { SearchUserPipe } from './shared/pipes/search-user.pipe';
import { AddStudentToTestComponent } from './lecture/test-section/add-student-to-test/add-student-to-test.component';
import { ForgotPasswordEmailComponent } from './forgot-password/forgot-password-email/forgot-password-email.component';
 
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditTestComponent } from './lecture/test-section/edit-test/edit-test.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { AdminAccountComponent } from './admin/admin-account/admin-account.component';
import { LectureAccountComponent } from './lecture/lecture-account/lecture-account.component';
import { LectureNavComponent } from './lecture/lecture-nav/lecture-nav.component';
import { LectureCourseSubjectComponent } from './admin/lecture/lecture-course-subject/lecture-course-subject.component';
import { AddSubjectForLectureComponent } from './admin/lecture/add-subject-for-lecture/add-subject-for-lecture.component';
import { AllAddLecturesComponent } from './admin/lecture/all-add-lectures/all-add-lectures.component';
import { AddLectureComponent } from './admin/lecture/add-lecture/add-lecture.component';

import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterComponent } from "./register/register.component";
import { NavHomeComponent } from "./nav-home/nav-home.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { UserDashboardComponent } from "./admin/user-dashboard/user-dashboard.component";
import { AddStudentComponent } from "./admin/students/add-student/add-student.component";
import { AddCouseComponent } from "./admin/courses/add-couse/add-couse.component";
import { AddDepartmentComponent } from "./admin/departement/add-department/add-department.component";
import { AddSubjectComponent } from "./admin/subjects/add-subject/add-subject.component";
import { StudentListComponent } from "./admin/students/student-list/student-list.component";
import { AllDepartementComponent } from "./admin/departement/all-departement/all-departement.component";
import { AllCoursesComponent } from "./admin/courses/all-courses/all-courses.component";
import { AllSubjectsComponent } from "./admin/subjects/all-subjects/all-subjects.component";
import { CourseDetailsComponent } from "./admin/course-details/course-details.component";
import { ToggleUserMenuComponent } from "./toggle-user-menu/toggle-user-menu.component";
import { LectureDashboardComponent } from './lecture/lecture-dashboard/lecture-dashboard.component';
import { LectureSubjectsComponent } from './lecture/lecture-subjects/lecture-subjects.component';
import { SubjectStudentsComponent } from './lecture/subject-students/subject-students.component';
import { LectureChangePasswordComponent } from './lecture/lecture-change-password/lecture-change-password.component';
import { StudentAccountComponent } from './student/student-account/student-account.component';
import { StudentChangePasswordComponent } from './student/student-change-password/student-change-password.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentNavComponent } from './student/student-nav/student-nav.component';
import { StudentSubjectsComponent } from './student/student-subjects/student-subjects.component';
import { StudentSubjectMarksComponent } from './student/student-subject-marks/student-subject-marks.component';
import { TestCentreComponent } from './lecture/test-section/test-list/test-centre.component';
import { AddTestComponent } from './lecture/test-section/add-test/add-test.component';
import { ForgotPasswordSuccessComponent } from './forgot-password/forgot-password-success/forgot-password-success.component';
import { TestStudentsComponent } from './lecture/test-section/test-students/test-students.component';
import { LoadingComponent } from './shared/loading/loading/loading.component';
import { AddSubjectForStudentComponent } from './admin/students/add-subject-for-student/add-subject-for-student.component';
import { StudentCourseSubjectComponent } from './admin/students/student-course-subject/student-course-subject.component';
import { IncomeComponent } from './admin/accounting/income/income.component';
import { ExpenditureComponent } from './admin/accounting/expenditures/expenditure/expenditure.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "user-dashboard", component: UserDashboardComponent },
  { path: "add-student", component: AddStudentComponent },
  { path: "add-department", component: AddDepartmentComponent },
  { path: "add-couse", component: AddCouseComponent },
  { path: "add-subject", component: AddSubjectComponent },
  { path: "student-list", component: StudentListComponent },
  { path: "all-departement", component: AllDepartementComponent },
  { path: "all-lectures", component: AllAddLecturesComponent },
  { path: "all-courses", component: AllCoursesComponent },

  { path: "accounting-reports", component: FinacailReportsComponent },
  { path: "finacail-income", component:IncomeComponent  }, 
  { path: "finacail-expenditure", component: ExpenditureComponent },

  { path: "add-lecture", component: AddLectureComponent },
  { path: "all-subjects", component: AllSubjectsComponent },
  { path: "student-course-subject/:id", component: StudentCourseSubjectComponent },
  { path: "lecture-course-subject/:id", component: LectureCourseSubjectComponent },
  { path: "add-subject-for-student/:id", component: AddSubjectForStudentComponent },
  { path: "add-subject-for-lecture", component: AddSubjectForLectureComponent },
  { path: "course/:id", component: CourseDetailsComponent },
  { path: "lecture-subjects/:id", component: LectureSubjectsComponent}, 
  { path: "subject-students/:id", component: SubjectStudentsComponent},
  { path: "lecture-dashboard", component: LectureDashboardComponent },
  { path: "lecture-account", component: LectureAccountComponent },
  { path: "lecture-change-password", component: LectureChangePasswordComponent },
  { path: "add-student-to-test", component: AddStudentToTestComponent },
  { path: "test-centre", component: TestCentreComponent },
  { path: "add-test", component: AddTestComponent },
  { path: "admin-account", component: AdminAccountComponent },
  { path: "admin-change-password", component: AdminChangePasswordComponent },
  { path: "student-dashboard", component:StudentDashboardComponent },
  { path: "student-subjects/:id", component: StudentSubjectsComponent},
  { path: "student-subject-marks", component: StudentSubjectMarksComponent },
  { path: "student-account", component: StudentAccountComponent},
  { path: "student-change-password", component: StudentChangePasswordComponent },
  { path: "edit-test/:id", component: EditTestComponent },
  { path: "forgot-password",component: ForgotPasswordComponent },
  { path: "forgot-my-password", component: ForgotPasswordEmailComponent },
  { path: "test-students", component: TestStudentsComponent },
  { path: "**", component: LoginComponent }
];
export const routingComponents = [
  HomePageComponent,
  AllSubjectsComponent,
  AllCoursesComponent,
  AllDepartementComponent,
  StudentListComponent,
  AddSubjectComponent,
  AddCouseComponent,
  RegisterComponent,
  NavHomeComponent,
  ContactComponent,
  LoginComponent,
  UserDashboardComponent,
  AddStudentComponent,
  AddDepartmentComponent,
  CourseDetailsComponent,
  StudentCourseSubjectComponent,
  AddSubjectForStudentComponent,
  ToggleUserMenuComponent,
  AddLectureComponent,
  AllAddLecturesComponent,
  AddSubjectForLectureComponent,
  LectureCourseSubjectComponent,
  LectureDashboardComponent,
  LectureNavComponent,
  LectureSubjectsComponent,
  SubjectStudentsComponent,
  LectureAccountComponent,
  LectureChangePasswordComponent,
  AdminAccountComponent,
  AdminChangePasswordComponent,
  StudentSubjectsComponent,
  StudentSubjectMarksComponent,
  StudentAccountComponent,
  StudentChangePasswordComponent,
  EditTestComponent,
  AddStudentToTestComponent,
  ForgotPasswordComponent,
  ForgotPasswordEmailComponent,
  ForgotPasswordSuccessComponent,
  TestStudentsComponent,
  LoadingComponent,
  TestCentreComponent ,
  AddTestComponent ,
  StudentDashboardComponent, 
  SearchUserPipe,
  StudentNavComponent,FinacailReportsComponent,IncomeComponent, ExpenditureComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
