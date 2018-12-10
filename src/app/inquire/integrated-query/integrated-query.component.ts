import { Component, OnInit, forwardRef } from '@angular/core';
import { format } from 'date-fns';
import { IntegratedQueryService } from './integrated-query.service';

interface Param {
  ywh?: string;
  bdcdyh?: string;
  zl?: string;
  bdcqzh?: string;
  bdclx?: string;
  djdl?: string;
  djksrq?: string;
  djjsrq?: string;
  qlr?: string;
  qlrzjh?: string;
  ywr?: string;
  ywrzjh?: string;
  zt?: string;
}

@Component({
  selector: 'integrated-query',
  templateUrl: './integrated-query.component.html',
  styleUrls: ['./integrated-query.component.css'],
  providers: [IntegratedQueryService]
})
export class IntegratedQueryComponent implements OnInit {
  moreQueryVisible = false;
  formData: Param = {};
  constructor(
    private integratedQueryService: IntegratedQueryService
  ) { }
  // 初始化
  private dataSet = [];
  private currentPageData: Array<object> = [];
  /**
   * @method formatDate
   * @description 格式化时间
   * @param date 时间
   */
  public formatDate(date) {
    return format(date, 'YYYY-MM-DD');
  }
  change(val) {
    console.log(val);
  }
  private queryData() {
    console.log(this.formData);
    this.integratedQueryService.queryData(this.formData).subscribe(
      data => {
        console.log(data);
        this.dataSet = data.data.records;
      }

    );
  }
  getData() {
    this.queryData();
  }


  // 当前页面展示数据改变的回调函数
  currentPageDataChange($event: Array<object>): void {
    this.currentPageData = [];
    this.currentPageData = $event;
  }
  ngOnInit() {
    this.queryData();
  }

}
