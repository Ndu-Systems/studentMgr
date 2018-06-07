import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';

@Injectable()
export class SubjectStudentsService {
    url: string = API_URL;
    constructor(private http: HttpClient) { }

    getStudents(subjectID): Observable<any>{
        return this.http.get<any>(`${this.url}/subject/subject_students.php?subjectID=${subjectID}`);
    }
}
