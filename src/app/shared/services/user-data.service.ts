 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { API_URL } from '../config';

@Injectable()
export class UserDataService {
user:any;
url = API_URL;
constructor(private httpClient: HttpClient) { }
saveUser(user:any):Observable<any>{
  return  this.user = user;
}
  getUser(): any{
    return this.user;
  
  }

  updateUser(data) : Observable<any>{
    return this.httpClient.post(`${this.url}/Account/UpdateUser.php`,data);  
  }

  updatePassword(data): Observable<any>{
    return this.httpClient.post(`${this.url}/Account/UpdatePassword.php`,data); 
  }

}
