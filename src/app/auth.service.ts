import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FeedBack} from './models/feedback'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://petstore.swagger.io/v2/user"

  constructor(private http: HttpClient) { }

  signup(username:string,email : string , password:string):
  Observable<FeedBack>{
    const header = {
      'Content-Type' : 'application/json'
    }

    const body = {
      'username' : username,
      'email' : email,
      'password' : password
    }

    return this.http.post<FeedBack>(this.apiUrl,body,{headers : header})
  }


}
