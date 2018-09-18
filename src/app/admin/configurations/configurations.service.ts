import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigurationsService {
    url: string = API_URL;
    constructor(private http: HttpClient) { }

    add(data): Observable<any> {
        return this.http.post<any>(`${this.url}/configuration/add-account-type.php`, data);
    }
}
