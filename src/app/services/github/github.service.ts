import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators"

import { StarrdData, User } from "@lib/github/starred"
import { StarHttpService } from "@utils/star-http.service"
import { CookieService } from "ngx-cookie-service"
import { ConstantsService  } from "@services/constants/constants.service"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrlPrefix = "api/v1/github";
  private urlPrefix = "api/v1/auth"

  constructor(
    private http: StarHttpService,
    private cookieService: CookieService,
    private constantService: ConstantsService
  ) { }


  getDefaultHeaders() {
    let accessToken = this.cookieService.get(
      this.constantService.get().accessTokenStr
    )
    return {
      headers: `Authorization: bearer ${accessToken}`
    }
  }

  auth(code: string): Observable<any> {
    const url: string = `${this.urlPrefix}?code=${code}`;
    return this.http.get<any>(url)
  }


  queryStarred(userName): Observable<StarrdData> {
    const url = `${this.githubUrlPrefix}/users/${userName}/starred`;
    return this.http.get<any>(url, this.getDefaultHeaders()).pipe(
      
    )
  }

  queryUser(): Observable<User> {
    const url = `${this.githubUrlPrefix}/user`;
    return this.http.get<User>(url, this.getDefaultHeaders()).pipe(
     tap(data=>{console.log(data)})
    )
  }
}
