import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/config';
@Injectable()
export class StudentCourseSubjectService {

    url: string = API_URL;

    constructor(private http:HttpClient) { }

    select(studentID):Observable<any>{
        return this.http.get<any>(`${this.url}/student_course/selectCourse.php?studentID=${studentID}`);
    }
    selectSubject(studentID):Observable<any>{
        return this.http.get<any>(`${this.url}/student_course/selectSubject.php?studentID=${studentID}`);
    }

}
