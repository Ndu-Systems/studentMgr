import { Injectable } from '@angular/core';
import { API_URL } from '../../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
student:any;
url: string = API_URL;
constructor(private http:HttpClient) { }

getStudentCourse(id):Observable<any>{
return this.http.get<any>(`${this.url}/student/getStudentCourse.php?id=${id}`);
}

saveStudent(student){
    this.student = student;
}

getStudent(){
    return this.student;
}
}
