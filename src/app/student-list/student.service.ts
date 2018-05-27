import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
student:any;
constructor() { }
saveStudent(student){
    this.student = student;
}
getStudent(){
    return this.student;
}
}
