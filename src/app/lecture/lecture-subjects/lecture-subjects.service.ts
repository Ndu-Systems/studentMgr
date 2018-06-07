import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class LectureSubjectsService {
    subject : any;
    constructor() { }
    saveSubject(subject:any):Observable<any>{
        return this.subject = subject;
    }
    getSubject(): any{
        return this.subject;
    }

}
