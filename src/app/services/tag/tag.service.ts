import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tagMap: Record<string, number>;
  private tag$ = new BehaviorSubject(null);
  constructor() {
    this.tagMap = {};
  }



  public addTag(value: string): void {
    if(isNaN(this.tagMap[value]) || this.tagMap[value] === undefined) {
      this.tagMap[value] = 1;
    } else {
      this.tagMap[value]++;
    }
    this.tag$.next(this.tagMap);
  }


  public removeTag(value: string): void {
    if(this.tagMap[value] > 0) {
      this.tagMap[value]--;
    }

    if(this.tagMap[value] <=0) {
      delete this.tagMap[value];
    }

    this.tag$.next(this.tagMap);
  }

  public getTagContext(): Observable<any> {
    return this.tag$.pipe(
      filter(item=>item!=null&&item!==undefined)
    );
  }
}
