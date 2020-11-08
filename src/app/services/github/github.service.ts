import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators"

import { StarrdData } from '../../lib/github/starred'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private urlPrefix = "api/v1/github";


  constructor(private http: HttpClient) { }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  login(): Observable<any> {

    const url: string = `${this.urlPrefix}/login`;

    return this.http.get<any>(url).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError<any>({}))
    )
  }


  queryStarred(userName): Observable<StarrdData> {
    const url = `${this.urlPrefix}/users/${userName}/starred`;
    return this.http.get<any>(url).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError<StarrdData>({}))
    )
  }
}
