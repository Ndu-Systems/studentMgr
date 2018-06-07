import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LectureService {

    lecture:any;
    url: string = API_URL;
    constructor(private http:HttpClient) { }
    add(data):Observable<any>{
    return this.http.post(`${this.url}/lecture_course/add_subject_for_lecture.php`,data);
    }
    saveLecture(lecture){
        this.lecture = lecture;
    }
    geLecture(){
        return this.lecture;
    }
// lecture-course

select(lectureID):Observable<any>{
    return this.http.get<any>(`${this.url}/lecture_course/selectCourse.php?lectureID=${lectureID}`);
}
selectSubject(lectureID):Observable<any>{
    return this.http.get<any>(`${this.url}/lecture_course/selectSubject.php?lectureID=${lectureID}`);
}
}
