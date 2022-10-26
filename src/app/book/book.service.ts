import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment,baseUrl } from 'src/environments/environment';
import { Book } from './book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = baseUrl + 'books';
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

}
