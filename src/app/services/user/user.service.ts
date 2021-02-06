import { Injectable } from '@angular/core';
import { GithubService } from '@services/github/github.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private user: any;

  constructor(
    private githubService: GithubService
  ) {


    this.githubService.queryUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }

  getUserInfo(): Observable<any> {
    if (this.user) {
      return of(this.user);
    }

    return this.githubService.queryUser();

  }
}
