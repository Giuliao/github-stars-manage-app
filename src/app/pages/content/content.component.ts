import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { GithubService } from '@services/github/github.service';
import { User, StarrdData, PaginatorItem } from '@services/github/github.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit, OnDestroy {

  public loading = true;
  public dataList: StarrdData[] = [];
  public paginOption = {
    prevOption: {
      pageIndex: 0,
      pageSize: 30,
      disabled: false,
    } as PaginatorItem,
    nextOption: {
      pageIndex: 0,
      pageSize: 30,
      disabled: false
    } as PaginatorItem
  };
  private userInfo: User;

  constructor(
    private githubService: GithubService,
    private scroll: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.githubService.getUser().subscribe((user: User) => {
      this.userInfo = user;
      this.queryStarredList();
    });
  }

  ngOnDestroy(): void {

  }

  public drop(event: CdkDragDrop<Array<string> >, item: StarrdData): void {
    moveItemInArray(item.tags, event.previousIndex, event.currentIndex);
  }

  public onUnstar(): void {
    console.log('cancal stars');
  }
  public onNext(): void {
    this.queryStarredList(this.paginOption.nextOption);

  }

  public onPrev(): void{
    this.queryStarredList(this.paginOption.prevOption);
  }

  public scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

  private queryStarredList(params?: any): void {
    this.loading = true;
    this.githubService.queryStarred(this.userInfo.name, params, {observe: 'response'}).subscribe(
      (resp: any) => {
      this.scrollToTop();
      const paginInfo = this.githubService.decodePaginInfo(resp.headers.get('link'));
      this.paginOption.prevOption = paginInfo.prev || {};
      this.paginOption.nextOption = paginInfo.next || {};

      this.dataList = resp?.body || [];
      this.loading = false;
    },
    err => {
      this.loading = false;
    });
  }


}
