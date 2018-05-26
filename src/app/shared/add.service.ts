import { Injectable } from '@angular/core';
import { API_URL } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddService {

    url: string = API_URL;
    constructor(private http:HttpClient) { }
    add(data, urlName):Observable<any>{
    return this.http.post(`${this.url}/${urlName}.php`,data);
    }
}
