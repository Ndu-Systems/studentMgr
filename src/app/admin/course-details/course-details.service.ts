import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';

@Injectable()
export class CourseDetailsService {

    url: string = API_URL;
    courseObject:any;
    constructor(private http:HttpClient) { }
    select(courseID):Observable<any>{
        return this.http.get<any>(`${this.url}/course_subject/select.php?courseID=${courseID}`);
    }
saveCourse(course){
    this.courseObject = course;
}
getCourse(){
    return this.courseObject;
}

}
