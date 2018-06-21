import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestCentreService {
    url: string = API_URL;
 
    constructor(private http: HttpClient) { }
    
        AddTest(data):Observable<any>{
        console.log(data);
        return this.http.post(`${this.url}/lecture/addTest.php`,data);
        }
        select(table):Observable<any>{
            return this.http.get<any>(`${this.url}/lecture/selectTests.php`);
            }

}
