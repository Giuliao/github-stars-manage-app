import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { GithubService } from '@services/github/github.service';
import { TagService } from '@services/tag/tag.service';
import { User, StarrdData, PaginatorItem } from '@services/github/github.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit, OnDestroy {

  public loading = true;
  public dataList: StarrdData[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
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
    private scroll: ViewportScroller,
    private tagService: TagService,
  ) { }

  ngOnInit(): void {
    this.githubService.getUser().subscribe((user: User) => {
      this.userInfo = user;
      this.queryStarredList();
    });
  }

  ngOnDestroy(): void {

  }

  public drop(event: CdkDragDrop<Array<any> >, item: StarrdData): void {
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


  public onRemove(data: any, starData: StarrdData): void {
    const index = starData.tags.indexOf(data);

    if (index >= 0) {
      starData.tags.splice(index, 1);
    }
    this.tagService.removeTag(data.name);
  }

  public onAdd(event: MatChipInputEvent, starData: StarrdData): void {
    // eslint-disable-next-line prefer-const
    let { input, value } = event;
    value = (value || '').trim();

    if(!value || starData.tags.find(item=>item.name === value)) {
      return;
    }

    starData.tags.push({name: value.trim()});
    this.tagService.addTag(value);
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  private queryStarredList(params?: any): void {
    if (!this.userInfo) {
      return;
    }
    this.loading = true;
    this.githubService.queryStarred(this.userInfo.name, params, {observe: 'response'}).subscribe(
      (resp: any) => {
      this.scrollToTop();
      const paginInfo = this.githubService.decodePaginInfo(resp.headers.get('link'));
      this.paginOption.prevOption = paginInfo.prev || {};
      this.paginOption.nextOption = paginInfo.next || {};

      this.dataList = resp?.body || [];
      this.dataList.forEach(item=>{
        item.tags = [];
      });
      this.loading = false;
    },
    err => {
      this.loading = false;
    });
  }
}
