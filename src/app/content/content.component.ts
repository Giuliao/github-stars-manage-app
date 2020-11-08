import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop"


export interface StarData {
  title: string
  description: string
  tags: Array<string>
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {


  dataList: StarData[] = [
    {
      title: "测试数据1",
      description: "测试手动阀手动阀导数法士大夫士大夫士大夫士大夫士大夫导数法",
      tags: [
        'test1',
        'test2',
        'test3',
        'test4',
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    },
    {
      title: "测试数据2",
      description: "测试手动阀手动阀导数法士大夫士大夫士大夫士大夫士大夫导数法",
      tags: [
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    },
    {
      title: "测试数据3",
      description: "测试手动阀手动阀导数法士大夫士大夫士大夫士大夫士大夫导数法",
      tags: [
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    },
    {
      title: "测试数据4",
      description: "测试手动阀手动阀导数法士大夫士大夫士大夫士大夫士大夫导数法",
      tags: [
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    },
    {
      title: "测试数据5",
      description: "测试手动阀手动阀导数法士大夫士大夫士大夫士大夫士大夫导数法",
      tags: [
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<Array<string> >, item: StarData) {
    moveItemInArray(item.tags, event.previousIndex, event.currentIndex)
  }

  onUnstar() {
    console.log('cancal stars');
  }

}
