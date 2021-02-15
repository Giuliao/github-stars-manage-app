import { Component, OnInit } from '@angular/core';
import { TagService } from '@services/tag/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.less']
})
export class TagListComponent implements OnInit {

  public data = [];


  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.tagService.getTagContext().subscribe(
      (data: Record<string, number>)=>{
        this.data = this.decodeData(data);
      }
    );
  }

  private decodeData(data: Record<string, number>): Array<any>  {
    const results = [];
    Object.keys(data).forEach(key=>{
      results.push({name: key, count: data[key]});
    });
    return results;
  }

}
