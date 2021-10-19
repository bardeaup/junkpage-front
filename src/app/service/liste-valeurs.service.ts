import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LISTE_VALEURS_API = "http://localhost:8080/api/liste-valeurs/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListeValeursService {

  constructor(private http: HttpClient) {
  }

  getListeValeurs(code: String): Observable<any> {
    return this.http.get(LISTE_VALEURS_API+code);
  }

}
