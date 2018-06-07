import { Injectable } from '@angular/core';

@Injectable()
export class LectureService {

    lecture:any;
    constructor() { }
    saveLecture(student){
        this.lecture = student;
    }
    geLecture(){
        return this.lecture;
    }

}
