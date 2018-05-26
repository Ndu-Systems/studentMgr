import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    API_PATH = API_URL;
    constructor(private httpClient:HttpClient ) { }
  
    loginUser(email:string, password:string):Observable<any>{
         return this.httpClient.get<any>(`${this.API_PATH}/Account/LoginUser.php?email=${email}&password=${password}`);
    }
  

}
