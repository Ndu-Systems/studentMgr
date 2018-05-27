import { AddSubjectForStudentComponent } from './add-subject-for-student/add-subject-for-student.component';
import { StudentCourseSubjectComponent } from './student-course-subject/student-course-subject.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AllSubjectsComponent } from "./all-subjects/all-subjects.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { AllDepartementComponent } from "./all-departement/all-departement.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { AddSubjectComponent } from "./add-subject/add-subject.component";
import { AddCouseComponent } from "./add-couse/add-couse.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterComponent } from "./register/register.component";
import { NavHomeComponent } from "./nav-home/nav-home.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { AddDepartmentComponent } from "./add-department/add-department.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomePageComponent },
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
  { path: "all-courses", component: AllCoursesComponent },
  { path: "all-subjects", component: AllSubjectsComponent },
  { path: "student-course-subject/:id", component: StudentCourseSubjectComponent },
  { path: "add-subject-for-student", component: AddSubjectForStudentComponent },
  { path: "course/:id", component: CourseDetailsComponent },

  { path: "**", component: HomePageComponent }
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
  AddSubjectForStudentComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
