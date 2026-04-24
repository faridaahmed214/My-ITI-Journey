import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApiService<T> {
  constructor(protected http: HttpClient, protected apiUrl: string) {}

  getAll(queryParams?: string): Observable<T[]> {
    const url = queryParams ? `${this.apiUrl}?${queryParams}` : this.apiUrl;
    return this.http.get<T[]>(url);
  }

  getById(id: string | number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item);
  }

  update(id: string | number, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, item);
  }

  patch(id: string | number, changes: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${id}`, changes);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
