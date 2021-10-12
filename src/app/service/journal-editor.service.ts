import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JournalEdition } from '../models/journal-edition';

const JOURNAL_EDIT_API = "http://localhost:8080/api/journal-edit/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JournalEditorService {

  constructor(private http: HttpClient) { }


  /** POST: add a new journalEdition to the database */
  createJournalEdition(journalEdition: JournalEdition): Observable<JournalEdition> {
     return this.http.post<JournalEdition>(JOURNAL_EDIT_API + 'edition', journalEdition, httpOptions);
  }
}
