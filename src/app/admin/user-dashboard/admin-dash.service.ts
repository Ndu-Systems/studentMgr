import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminDashService {

    url: string = API_URL;
    constructor(private http:HttpClient) { }
    getCounts():Observable<any>{
    return this.http.get<any>(`${this.url}/admin/GetAdminDashCounts.php`);
    }
}
