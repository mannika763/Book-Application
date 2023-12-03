import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer, Subscriber,  BehaviorSubject } from "rxjs";
import { User } from './Module/user';
import { first, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = "http://localhost:5000/auth";
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId:number=0;
  Name$ = new BehaviorSubject<string | null>(null);

  // setting the headers
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor( private http: HttpClient,  private router: Router) {
    this.initializeAuthentication();
  }

  private initializeAuthentication() {
    const token = localStorage.getItem('token');
    if (token) {
     console.log("token is still there")
      const decodedToken = this.decodeToken(token);
      this.Name$.next(decodedToken ? decodedToken.name : null);

    }
  }

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
     //   catchError(this.errorHandlerService.handleError<User>("signup"))
     tap(() => {
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    })
      )
  }


  login(email: any, password: any) {
    this.http.post(
      `${this.url}/login`,
      { email, password }
    ).subscribe((res: any)=>{
      console.warn(res);
      this.Name$.next(res.name);
     localStorage.setItem('token',res.token);

    });
  }

  removetoken(){
    console.log("removed")
    localStorage.removeItem('token');

  }


  private decodeToken(token: string): any {
    try {
      console.log("see is token coming here", JSON.parse(atob(token.split('.')[1])))
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }



  }

