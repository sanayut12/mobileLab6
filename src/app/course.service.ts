import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import{ Course} from './models/course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  apiUrl = "https://codingthailand.com/api/get_courses.php";
  constructor(private http: HttpClient) { }
  getCourse():Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }
}
