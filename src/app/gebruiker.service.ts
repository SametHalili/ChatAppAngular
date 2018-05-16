import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gebruiker } from './gebruiker';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GebruikerService {
  private urlGetAllUsers = 'http://localhost:8080/Controller?asyncAction=getAllUsers';
  private urlGetUser = 'http://localhost:8080/Controller?asyncAction=getUser&username=';
  private urlUpdateUser = 'http://localhost:8080/Controller?asyncAction=updateUser';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

  }

  /** GET gebruikers from the server */
  getGebruikers (): Observable<Gebruiker[]> {
    const url = `${this.urlGetAllUsers}`;
    return this.http.get<Gebruiker[]>(url)
      .pipe(
      catchError(this.handleError('getGebruikers', []))
    );
  }

  /** GET gebruiker by id. Return `undefined` when id not found */
  getGebruiker(username: string): Observable<Gebruiker> {
    const url = `${this.urlGetUser}${username}`;
    return this.http.get<Gebruiker>(url)
      .pipe(
      catchError(this.handleError<Gebruiker>(`gebruiker username=${username}`))
    );
  }

  updateGebruiker(gebruiker: Gebruiker): Observable<any> {
    const url = `${this.urlUpdateUser}`;
    return this.http.put(url, gebruiker, httpOptions)
      .pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // dit was alleen voor tests, negeren aub
  private log(message: string) {
    this.messageService.add('GebruikerService: ' + message);
  }

}
