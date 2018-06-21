import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/config';

@Injectable()
export class ForgotPasswordService {

    API_PATH = API_URL;
    constructor(private httpClient:HttpClient ) { }
  
    forgotPassword(email:string):Observable<any>{
         return this.httpClient.get<any>(`${this.API_PATH}/Account/ForgotEmail.php?email=${email}`);
    }
}
