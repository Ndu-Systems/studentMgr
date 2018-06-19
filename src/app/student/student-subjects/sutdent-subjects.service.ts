import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';

@Injectable()
export class SutdentSubjectsService {

    ApiUrl: string = API_URL;

constructor(private httpClient: HttpClient) { }
selectSubject(studentID):Observable<any>{
    return this.httpClient.get<any>(`${this.ApiUrl}/student/student_subjects.php?studentID=${studentID}`);
}
}
