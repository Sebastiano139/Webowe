import { User } from './../auth/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addUser(user: User) {
    this.http.post<User>(this.baseurl + '/users', user).subscribe(
    res => { console.log(res); },
    (err: HttpErrorResponse) => { console.log(err); } );
    }

  // GET
  GetUser(id): Observable<User> {
    return this.http.get<User>(this.baseurl + '/users/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  GetUsers(): Observable<User> {
    return this.http.get<User>(this.baseurl + '/users/')
      .pipe(
        retry(1),
        catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
