import { TestCentreService } from './../add-test/test-centre.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-students',
  templateUrl: './test-students.component.html',
  styleUrls: ['./test-students.component.css']
})
export class TestStudentsComponent implements OnInit {
  students: any[];
  studentTest: any[];
  allStudents: any[];
  newStudents: any[];
  test: any;

  constructor(
    private testCenterService: TestCentreService,
    private router : Router
  ) { }

  ngOnInit() {
    this.allStudents =[];
    this.test = this.testCenterService.getTest();
    this.GetStudentsForTest();
    this.GetStudentsForSubject();
  }

  GetStudentsForTest(){
    this.testCenterService.getStudentsForTest(1).subscribe(response => {
      if(response){
        this.students = response;
      }
    });
  }

  GetStudentsForSubject(){
    this.testCenterService.getStudents(this.test.subjectID).subscribe(response=>{
      if(response){
        this.allStudents = response;
      }
    });
  }
  AddStudent(stu) {
    let check = this.students.filter(x => x.id == stu);
    if (check.length > 0) {
      return false;
    }
    let student = this.allStudents.filter(x => x.id == stu);
    this.students.push(student[0]);
  }
  Remove(subject) {
    var index = this.students.indexOf(subject, 0);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }
  SaveAll() {
  
   this.newStudents = [];
   //Checks if the student allready exists n the array of students for the test *Bug fix
   this.testCenterService.getStudentsForTest(this.test.id).subscribe(response=>{
    this.studentTest = response;
   });
    for(var item of this.allStudents){      
      let check  = this.studentTest.filter(x => x.id == item.id);
      if(check.length == 0){  
        let student = this.allStudents.filter(x => x.id == item.id);
        this.newStudents.push(student[0]);
      }
    }
   
    var result = confirm("Are you sure you want to save these Changes?");
    if (result) {   
      if(this.newStudents.length == 0){
        alert('No New Student(s) added');
        this.router.navigate(["/test-centre"]);
      } 
      let data = {
        studentIDs: this.newStudents,
        testID: this.test.id
      };
      this.testCenterService.addStudentsToTest(data).subscribe(response => {
        if(response == "success"){        
        alert("Student(s) added");
        this.router.navigate(["/test-centre"]);
      } 
      });
    }
  }

}
