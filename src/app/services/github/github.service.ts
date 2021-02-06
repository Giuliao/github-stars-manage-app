import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap, skip, filter } from 'rxjs/operators';

import { StarrdData, User } from './github.interface';
import { StarHttpService } from '@utils/star-http.service';
import { CookieService } from 'ngx-cookie-service';
import { ConstantsService } from '@services/constants/constants.service';
import { PaginatorItem } from './github.interface';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrlPrefix = 'api/v1/github';
  private urlPrefix = 'api/v1/auth';
  private user$ = new BehaviorSubject(null);

  constructor(
    private http: StarHttpService,
    private cookieService: CookieService,
    private constantService: ConstantsService
  ) { }




  public auth(code: string): Observable<any> {
    const url = `${this.urlPrefix}?code=${code}`;
    return this.http.get<any>(url);
  }


  public queryStarred(userName: string, params: any= {pageIndex: 1, pageSize: 30}, options: any= {}): Observable<Array<StarrdData>> {
    const url = `${this.githubUrlPrefix}/users/${userName}/starred?page=${params.pageIndex}&per_page=${params.pageSize}`;
    return this.http.get<Array<StarrdData>>(url, Object.assign(this.getDefaultHeaders(), options)).pipe(
      filter(data => data != null)
    );
  }

  public queryUser(): Observable<User> {
    const url = `${this.githubUrlPrefix}/user`;
    return this.http.get<User>(url, this.getDefaultHeaders()).pipe(
     tap(data => {this.user$.next(data); })
    );
  }
  public getUser(): Observable<User> {
    return this.user$.pipe(skip(1));
  }

  public decodeUserData() {

  }

  public decodePaginInfo(link: string): Record<string, PaginatorItem> {
    if (!link) {
      return null;
    }

    const result: Record<string, PaginatorItem> = {
      next: {
        disabled: true
      },
      last: {
        disabled: true

      },
      prev: {
        disabled: true
      }
    };

    link.split(',').forEach(item => {
      const [ url, rel ] = item.split(';');
      result[this.decodePaginRel(rel.trim())] = Object.assign(result[this.decodePaginRel(rel.trim())] || {}, this.decodePaginUrl(url));
    });

    return result;
  }

  private getDefaultHeaders() {
    const accessToken = this.cookieService.get(
      this.constantService.get().accessTokenStr
    );
    return {
      headers: `Authorization: bearer ${accessToken}`
    };
  }

  private decodePaginUrl(url: string): PaginatorItem {
    const result: PaginatorItem = {
      pageIndex: 1,
      pageSize: 30,
      disabled: false
    };

    const reg = /page=\d+/g;
    const regResult = url.match(reg);
    if (regResult != null) {
      const [ pageIndexStr, pageSizeStr ] = regResult;
      result.pageIndex = parseInt(pageIndexStr.split('=')[1], 10);
      result.pageSize = parseInt(pageSizeStr.split('=')[1], 10);
    }

    return result;
  }

  private decodePaginRel(rel: string): string {
    const reg = /"([^"]*)"/;
    return rel.split('=')[1].match(reg)[1] || '';
  }

}
