import { Component, OnInit } from '@angular/core';
import { User } from "@lib/github/starred";
import { UserService } from '@services/user/user.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {


  public user: any;
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.user = this.userService.getUserInfo().subscribe(data=>{
      this.user = data;
    });
  }

}
