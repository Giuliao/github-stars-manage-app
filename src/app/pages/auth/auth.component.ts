import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github/github.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConstantsService } from '@services/constants/constants.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private constantService: ConstantsService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params.code ?? '';
      if (!code) {
        this.router.navigate(['/']);
      }

      this.githubService.auth(code).subscribe(data => {
        if (!data) {
          return;
        }
        this.cookieService.set(this.constantService.get().accessTokenStr, data.access_token);
        this.router.navigate(['/']);
      });
    });
  }

}
