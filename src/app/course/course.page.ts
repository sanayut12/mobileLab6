import { Component, OnDestroy, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../models/course'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit , OnDestroy {
  courses : Course[];
  sub : Subscription; 
  
  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.sub = this.courseService.getCourse().subscribe(
      (courses) =>{
        this.courses = courses;
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
