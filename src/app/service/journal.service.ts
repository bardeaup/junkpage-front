import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const JOURNAL_API = "http://localhost:8080/api/journal/";
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) {
  }

  getJournalArticles(): Observable<any> {
    return this.http.get(JOURNAL_API + 'articles');
  }

}
