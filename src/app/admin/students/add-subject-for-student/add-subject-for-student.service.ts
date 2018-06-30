import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../../../shared/config';

@Injectable()
export class AddSubjectForStudentService {
    url: string = API_URL;
    constructor(private http:HttpClient) { }
    add(data):Observable<any>{
    return this.http.post(`${this.url}/student_course/add_subject_for_student.php`,data);
    }

}
