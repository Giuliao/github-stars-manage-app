import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.less']
})
export class BackToTopComponent implements OnInit {

  public pageOffset = 0;
  constructor(
    private scroll: ViewportScroller
  ) { }


  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any): void {
    this.pageOffset = window.pageYOffset;
  }





  ngOnInit(): void {
  }

  public onClick(event: any): void {
    window.scroll(0, 0);
  }


  public scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }


}
