import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class RegisterService {

    url: string = API_URL;
 
    constructor(private http: HttpClient) { }
    
        registerUser(model):Observable<any>{
            console.log(model);
        return this.http.post(`${this.url}/Account/Reg.php`,model);
        }

}
