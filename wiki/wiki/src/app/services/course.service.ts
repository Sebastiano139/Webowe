import { Course } from './../Course';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

getCourses() {
  return this.http.get<Course[]>(this.baseurl + '/courses/').toPromise().then(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

}
