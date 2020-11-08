import { Component } from '@angular/core';
import { GithubService } from "./services/github/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'github-stars';
  constructor(private githubService: GithubService) {}

  onLogin() {
    this.githubService.login().subscribe(data=>{
      console.log(data);
    })
  }

}
