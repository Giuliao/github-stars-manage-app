import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github/github.service';
import { User } from "@lib/github/starred";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  public user: User;
  constructor(private githubService: GithubService) {
    
  }

  ngOnInit(): void {
    
  }

}
