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
import { StudentCourseSubjectComponent } from "./admin/student-course-subject/student-course-subject.component";
import { AddSubjectForStudentComponent } from "./admin/add-subject-for-student/add-subject-for-student.component";
import { CourseDetailsComponent } from "./admin/course-details/course-details.component";
import { ToggleUserMenuComponent } from "./toggle-user-menu/toggle-user-menu.component";
import { LectureDashboardComponent } from './lecture/lecture-dashboard/lecture-dashboard.component';

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
  { path: "all-lectures", component: AllAddLecturesComponent },
  { path: "all-courses", component: AllCoursesComponent },
  { path: "add-lecture", component: AddLectureComponent },
  { path: "all-subjects", component: AllSubjectsComponent },
  { path: "student-course-subject/:id", component: StudentCourseSubjectComponent },
  { path: "lecture-course-subject/:id", component: LectureCourseSubjectComponent },
  { path: "add-subject-for-student", component: AddSubjectForStudentComponent },
  { path: "add-subject-for-lecture", component: AddSubjectForLectureComponent },
  { path: "course/:id", component: CourseDetailsComponent },

  // Lecture
 
  { path: "lecture-dashboard", component: LectureDashboardComponent },


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
  AddSubjectForStudentComponent,
  ToggleUserMenuComponent,
  AddLectureComponent,
  AllAddLecturesComponent,
  AddSubjectForLectureComponent,
  LectureCourseSubjectComponent,
  LectureDashboardComponent,
  LectureNavComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
