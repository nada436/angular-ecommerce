import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class IsLogin {

  islogin(): boolean {
    return !!Cookies.get('user');
  }

  getUserRole(): string | null {
    const user = Cookies.get('user');
    return user ? JSON.parse(user).role : null;
  }

  login(userData: any) {
    Cookies.set('user', JSON.stringify(userData), { path: '/' });
  }

  logout() {
    Cookies.remove('user', { path: '/' });
  }

  register(userData: any) {
    Cookies.set('user', JSON.stringify(userData), { path: '/' });
  }
}
