import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable , of, throwError } from "rxjs";
import { ApiResponse } from "../model/api.response";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  //url referenced
  baseUrl: string = 'http://localhost:8080/users/';

    login(loginPayload) : Observable<ApiResponse> {
        return this.http.post<ApiResponse>('http://localhost:8080/'+ 'token/generate-token'
            , loginPayload).pipe(catchError(val => of(val)));
    }
    
    getUsers() : Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl);
    }
}