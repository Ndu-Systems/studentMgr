import { Injectable } from '@angular/core';
import { API_URL } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddService {


    url: string = API_URL;
 
    constructor(private http: HttpClient) { }
    
        add(data,api):Observable<any>{
        console.log(data);
        return this.http.post(`${this.url}/${api}.php`,data);
        }


}
