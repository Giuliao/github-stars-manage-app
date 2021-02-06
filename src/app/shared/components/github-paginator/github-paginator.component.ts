import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-github-paginator',
  templateUrl: './github-paginator.component.html',
  styleUrls: ['./github-paginator.component.less']
})
export class GithubPaginatorComponent implements OnInit {

  @Input() disabledNext = false;
  @Input() disabledPrev = false;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() prev: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onPrev(): void {
    this.prev.emit(null);
  }


  public onNext(): void {
    this.next.emit(null);
  }

}
