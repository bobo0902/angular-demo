import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

/**
 * @interface 表格宽高
 */
interface TableScroll {
  x: string;
  y: string;
}

/**
 * @interface 表格数据
 */
interface TableData {
  name: string;
  age: number;
  address: string;
  checked?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  @ViewChild('tableBox') tableBox: Element;

  // 查询条件
  moreQueryVisible = false;
  dataSet = [];
  tableScroll: TableScroll;

  // 表格相关
  allChecked = false;
  indeterminate = false;
  currentPageData: Array<TableData> = [];
  checkedData: Array<TableData> = [];

  // 弹框相关
  isVisible = false;
  detail: TableData;

  nodes = [{
    'key': 'b2f699f1624643da8d11968aa80bf8a6',
    'title': '档案分类',
    'classdesc': '分类呀',
    'seqName': 'BDC_DA_NO',
    'parentid': null,
    'children': [
      {
        'key': '8a7e9e815f52d792015f52e213d70009',
        'title': '房产案卷1',
        'classdesc': '这是描述！',
        'seqName': 'BDC_DA_NO',
        'parentid': 'b2f699f1624643da8d11968aa80bf8a6',
        'children': [
          {
            'key': '3216105efc2f5386be505e55b0b16d6b',
            'title': '房产转移房产转移',
            'classdesc': '这也是秒速！',
            'seqName': 'BDC_DA_NO',
            'parentid': '8a7e9e815f52d792015f52e213d70009',
            'isLeaf': true
          },
          {
            'key': '3216105ef52f53860e505e55b0116d6b',
            'title': '房产变更',
            'classdesc': '123',
            'seqName': 'BDC_DA_NO',
            'parentid': '8a7e9e815f52d792015f52e213d70009',
            'isLeaf': true
          },
          {
            'key': '4222e70e9a8c41458f564c4243e16617',
            'title': '房产抵押',
            'classdesc': '222',
            'seqName': 'BDC_DA_NO',
            'parentid': '8a7e9e815f52d792015f52e213d70009',
            'isLeaf': true
          }
        ]
      },
      {
        'key': '3216102efc2f4386be505e95b0b16d6b',
        'title': '土地案卷1',
        'classdesc': '土地分类',
        'seqName': 'BDC_DA_NO',
        'parentid': 'b2f699f1624643da8d11968aa80bf8a6',
        'children': [
          {
            'key': 'feb9bec5e5bc4790ad5b2485275f85a6',
            'title': '土地案卷',
            'classdesc': '土地案卷',
            'seqName': 'BDC_DA_NO',
            'parentid': '3216102efc2f4386be505e95b0b16d6b',
            'isLeaf': true
          },
          {
            'key': '61a6d8c913d54338b4e4589d90aeb808',
            'title': '土地注销',
            'classdesc': null,
            'seqName': 'BDC_DA_NO',
            'parentid': '3216102efc2f4386be505e95b0b16d6b',
            'isLeaf': true
          },
          {
            'key': '123456789455546456asdffdsa45456',
            'title': '土地初始',
            'classdesc': null,
            'seqName': 'BDC_DA_NO',
            'parentid': '3216102efc2f4386be505e95b0b16d6b',
            'isLeaf': true
          }
        ]
      }
    ]
  },
  {
    'key': '15e91ed8c3bd44f7bc3a7f3ea636aaf0',
    'title': '林权',
    'classdesc': '森林',
    'seqName': 'BDC_DA_NO',
    'parentid': null,
    'isLeaf': true
  }];
  // 树节点点击事件
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    alert(event.node.title);
  }

  // 当前页面展示数据改变的回调函数
  currentPageDataChange($event: Array<TableData>): void {
    this.currentPageData = [];
    this.currentPageData = $event;
  }

  // 单选
  nzCheckedChange(data?: TableData): void {
    this.checkedData = [];
    const allChecked = this.currentPageData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.currentPageData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.currentPageData.forEach(item => {
      if (!item.disabled && item.checked) {
        this.checkedData.push(item);
      }
    });
    console.log(this.checkedData);
  }

  // 全选
  checkAll(value: boolean): void {
    this.currentPageData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.nzCheckedChange();
  }

  // 点击操作事件
  checkItem(data: TableData): void {
    this.isVisible = true;
    this.detail = data;
  }
  constructor() {
  }
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        name: `开发 ${i}`,
        age: 30,
        address: `天耀宏图 no. ${i}`
      });
    }
    // 设置表格高度
    let tableClientHeight = this.tableBox['nativeElement'].clientHeight - 100;
    this.tableScroll = {
      x: '1500px',
      y: `${tableClientHeight}px`
    };
  }

}
