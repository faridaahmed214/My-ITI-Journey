import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

export interface User {
  id?: string;
  userName: string;
  userEmail: string;
  userPassword?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService<User> {
  private currentUserSignal = signal<User | null>(this.loadUserFromStorage());
  public currentUser = this.currentUserSignal.asReadonly();

  constructor() {
    super(inject(HttpClient), 'http://localhost:3000/users');
  }

  private loadUserFromStorage(): User | null {
    const data = localStorage.getItem('currentUser');
    if (data) {
      try { return JSON.parse(data); } catch(e) {}
    }
    return null;
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSignal.set(user);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        userName: user.userName,
        userEmail: user.userEmail
      }));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  checkEmailExists(email: string): Observable<User[]> {
    return this.getAll(`userEmail=${encodeURIComponent(email)}`);
  }

  register(user: User): Observable<User> {
    return this.create(user);
  }

  login(email: string, hashedPassword: string): Observable<User[]> {
    return this.getAll(`userEmail=${encodeURIComponent(email)}&userPassword=${encodeURIComponent(hashedPassword)}`);
  }

  logout(): void {
    this.setCurrentUser(null);
  }
}
