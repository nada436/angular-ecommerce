import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface IUser {
  id?: number;
  name: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable({
  providedIn: 'root',
})
export class IsLogin {

  private currentUser$ = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient) {}

  checkUsername(name: string): Observable<boolean> {
    const params = new HttpParams().set('name', name);
    return this.http
      .get<IUser[]>(`${environment.baseurl}/users`, { params })
      .pipe(map(users => users.length > 0));
  }

  islogin(): boolean {
    return this.currentUser$.value !== null;
  }

  getUserRole(): string | null {
    return this.currentUser$.value?.role ?? null;
  }

  login(credentials: { name: string; password: string }): Observable<IUser | null> {
    const name = credentials.name.trim();
    const password = credentials.password;
    const params = new HttpParams().set('name', name);
    return this.http.get<IUser[]>(`${environment.baseurl}/users`, { params }).pipe(
      map(users => {
        const user = users.find(u => (u.name?.toLowerCase?.() ?? u.name) === name.toLowerCase());
        if (user && user.password === password) {
          return user;
        }
        return null;
      }),
      tap(user => this.currentUser$.next(user))
    );
  }

  logout() {
    this.currentUser$.next(null);
  }

  register(userData: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.baseurl}/users`, userData)
      .pipe(tap(user => this.currentUser$.next(user)));
  }
}
