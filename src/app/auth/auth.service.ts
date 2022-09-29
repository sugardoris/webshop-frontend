import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserCredentials } from '../model/userCredentials';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser?: User | null;
  errorEmitter: Subject<string> = new Subject<string>();

  private authUrl = 'http://localhost:8081/authenticate';
  private apiUsersUrl = 'http://localhost:8081/authenticate/api/users';

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  authenticate(userCredentials: UserCredentials): Observable<User> {
    return this.http
      .post<User>(this.authUrl, userCredentials, this.httpOptions)
      .pipe(
        tap((_) => console.log('fetched user')),
        catchError(this.handleError<User>())
      );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/about']);
  }

  getCurrentUser() {
    let userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      this.currentUser = JSON.parse(userFromStorage);
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser != null;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUsersUrl, user, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status == 404) {
        this.errorEmitter.next("User with this email doesn't exist");
      } else {
        this.errorEmitter.next('Wrong credentials!');
      }
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
