import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class StarHttpService {

  constructor(private http: HttpClient) { }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public get<T>(url: string, options ?: {}): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError<T>())
    )
  }


  public post<T>(url: string, body ?:{}, options ?: {}): Observable<T> {
    return this.http.post<T>(url,body, options).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError<T>())
    )
  }


  public head() {

  }


  public put() {

  }
}
