import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators"

import { StarrdData, User } from "@lib/github/starred"
import { StarHttpService } from "@utils/star-http.service"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrlPrefix = "api/v1/github";
  private urlPrefix = "api/v1/auth"

  constructor(private http: StarHttpService) { }

  auth(): Observable<any> {
    const url: string = `${this.urlPrefix}`;
    return this.http.get<any>(url).pipe(
    
    )
  }


  queryStarred(userName): Observable<StarrdData> {
    const url = `${this.githubUrlPrefix}/users/${userName}/starred`;
    return this.http.get<any>(url).pipe(
      
    )
  }

  queryUser(): Observable<User> {
    const url = `${this.githubUrlPrefix}/user`;
    return this.http.get<User>(url).pipe(
     tap(data=>{console.log(data)})
    )
  }
}
