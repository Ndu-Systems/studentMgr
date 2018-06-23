import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable()
export class TokenService {

    url: string = API_URL;
    constructor(private http:HttpClient) { }
     
}
